import React from 'react';
import { GetMiniImageUrlFromName } from './PokemonImage';
import './Card.css';

const NameAndEvolution = ({pokemonName, evolutionNumber, evolutionFrom}) => {
    
    const getEvolutionDescription = () => {
        return evolutionFrom ? `Evolves from ${evolutionFrom}` : 'Basic Pokemon';
    }

    const getPokemonMiniImageUrl = () => {
        return GetMiniImageUrlFromName(evolutionFrom);
    }
    
    return (
        <div className="pokemon-identity">
            <div>
                <p className="pokemon-devolution-name">{getEvolutionDescription()}</p>
                <p className="pokemon-name">{pokemonName}</p>
            </div>
        </div>
    );
}

export default NameAndEvolution;