import axios from "axios";
import pokemonCardsApi from 'pokemontcgsdk';

const pokemonTCGApiKey = '88a8b75a-1060-4007-8beb-7696d8e9f0e1';
const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/';


const getPokemonCards = async (pokemonData) => {
    const promises = pokemonData.map(async pokemon => {

        const pokemonCard = await getPokemonCard(pokemon.name);
        return pokemonCard.data[0];
    });

    return await Promise.all(promises)
}

const getPokemonCard = async (name) => {
    pokemonCardsApi.configure({apiKey: pokemonTCGApiKey});
    return await pokemonCardsApi.card.where({ q: `name:${name}`, pageSize: 1});
}

const getPokemonsData = async (amount) => {

    let pokemonsData = [];
    for (let i = 1; i < amount; i++) {
        const pokemon = await axios.get(pokemonApiUrl+i);
        pokemonsData.push(pokemon.data);
    }
    return pokemonsData;
}

export const getOriginalPokemons = async (amount) => {

    let pokemons = [];
    const pokemonData = await getPokemonsData(amount);
    const cards = await getPokemonCards(pokemonData);

    pokemonData.map(pokemon => {
        const card = cards.find(c => c && c.name.toLowerCase().includes(pokemon.name));
        pokemons.push(getPokemonDataFrom(pokemon,card));
    });

    return pokemons;
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

const getPokemonDataFrom = (pokemon, card) => {
    if(pokemon && card) {    
        return {
            number: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            imageAtl: `This is an image of ${pokemon.name}`,
            health: card.hp,
            type: card.types[0].toLowerCase(),
            evolutionNumber: card.number,
            evolutionFrom: card.evolvesFrom,
            description: `${card.types[0]} Pokemon. Length: ${pokemon.height}, Weight: ${pokemon.weight} lbs.`,
            randomFact: `${card.flavorText ? card.flavorText : 'This pokemon has not random fact.'} LV. ${getRandomInt(1,101)} #${pokemon.id}`,
            weaknessData: getWeaknessData(card.weaknesses),
            resistanceData: getResistanceData(card.resistances),
            retreatData: getRetreatData(card.retreatCost),
            actions: getActions(card.attacks, card.abilities)
        }
    }
    return null;
}

const getWeaknessData = (weaknesses) => {

    if(weaknesses) {
        const type = weaknesses[0].type.toLowerCase();
        let amount = 0;
        amount = () => {
            if(weaknesses.value.includes(1))
                return 1;
            else if (weaknesses[0].value.includes(2))
                return 2;
            else if (weaknesses[0].value.includes(3))
                return 3;
            else if (weaknesses[0].value.includes(2))
                return 4;
        }

        return {
            amount: amount,
            type: type
        };
    }

    return null;
}

const getResistanceData = (resistanceData) => {

    if(resistanceData) {
        return {
            amount: 1,
            type: resistanceData[0].type.toLowerCase(),
            modifier: resistanceData[0].value,
        };
    }

    return null;
}

const getRetreatData = (retreatCost) => {

    if(retreatCost) {
        const amount = retreatCost.length;
        const type = retreatCost[0].toLowerCase() === "Colorless" ? null : retreatCost[0].toLowerCase();
    
        return {
            amount: amount,
            type: type
        };
    }
    return null;
}

const getActions = (attacks, abilities) => {
    let actions = [];
    const maxAmount = 2;

    if(abilities) {
        for (let i = 0; i < abilities.length; i++) {
            const ability = abilities[i];
            
            if(actions.length < maxAmount) {
                actions.push({
                    name: ability.name,
                    type: "power",
                    description: ability.text
                });
            }    
        }
    }
    
    if(attacks) {
        for (let i = 0; i < attacks.length; i++) {
            const attack = attacks[i];
            if(actions.length < maxAmount) {
                actions.push({
                    name: attack.name,
                    type: (attack.damage) ? "attack" : "effect",
                    description: attack.text,
                    energyType: attack.cost.length > 0 ? attack.cost[0].toLowerCase() : null,
                    energyAmount: attack.cost.length,
                    damage: attack.damage,
                })
            }
        }
    }

    return actions;
}