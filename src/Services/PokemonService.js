const pikachu = {
    number: 25,
    name: "Pikachu",
    image: 'https://amp.24horas.cl/mrf4u/statics/i/ps/www.24horas.cl/incoming/pikachujpg-2525083/ALTERNATES/w700/Pikachu.jpg?width=1200&enable=upscale',
    imageAtl: 'Pikachu attacking',
    health: 50,
    type: 'lightning',
    evolutionNumber: '0',
    evolutionFrom: '',
    description: 'Mouse Pokemon. Length: 1.4, Weigth: 13lbs',
    randomFact: "As Pikachu builds up energy in its electricity glands, it often needs to discharge, as to not result in a short. LV. 21 #25",
    weaknessData: {
        amount: 1,
        type: 'fighting',
    },
    retreatData: {
        amount: 1,
    },
    actions: [
        {
            name: "Growl",
            type: "effect",
            description: "If the Defending Pokemon attacks Pikachu during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance). (Benching either Pokemon ends this effect.)",
            energyAmount: 1
        },
        {
            name: "Thundershock",
            type: "attack",
            description: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            energyType: 'lightning',
            energyAmount: 2,
            damage: 20,
        }
    ]
}

const charizard = {
    number: 6,
    name: "Charizard",
    image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/03/Pokemon-Holograma-de-Charizard-se-vendio-en-subasta-en-mas-de-300-mil-dolares.jpg?fit=1280%2C720&quality=80&ssl=1',
    imageAtl: 'Charizard flying',
    health: 120,
    type: 'fire',
    evolutionNumber: '3',
    evolutionFrom: 'Charmeleon',
    description: "Flame Pokemon. Length: 5'7'', Weight: 200 lbs.",
    randomFact: "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires. LV. 76 #6",
    weaknessData: {
        amount: 1,
        type: 'water',
    },
    resistanceData: {
        amount: 1,
        type: 'fighting',
        modifier: -30,
    },
    retreatData: {
        amount: 3,
    },
    actions: [
        {
            name: "Energy Burn",
            type: "power",
            description: "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is Asleep, Confused, or Paralyzed."
        },
        {
            name: "Fire Spin",
            type: "attack",
            description: "Discard 2 Energy cards attached to Charizard in order to use this attack..",
            energyType: 'fire',
            energyAmount: 3,
            damage: 100,
        }
    ]
}

const pokemons = [pikachu, charizard];

export const getPokemonDataByNumber = (number) => {
    return pokemons.find(p => p.number === number);
}