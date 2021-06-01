import React from 'react';
import { GetMiniImageUrlFromName } from './PokemonImage';
import './Card.css';

const NameAndEvolution = ({pokemonName, evolutionNumber, evolutionFrom}) => {
    
    const getEvolutionDescription = () => {
        return evolutionNumber == 0 ? 'Basic Pokemon' : `Evolves from ${evolutionFrom}`;
    }

    const getPokemonMiniImageUrl = () => {
        return GetMiniImageUrlFromName(evolutionFrom);
    }

    const getPokemonDevolutionMiniature = (stage) => {
        return (
            stage == 0 ? 
            null 
            :
            <div className="pokemon-devolution">
                <p className="pokemon-stage"> Stage {stage}</p>
                <img className="pokemon-devolution-miniature" src={getPokemonMiniImageUrl()}/>
            </div>
        );
    }
    
    return (
        <div className="pokemon-identity">
            {getPokemonDevolutionMiniature(0)}
            <div>
                <p className="pokemon-devolution-name">{getEvolutionDescription()}</p>
                <p className="pokemon-name">{pokemonName}</p>
            </div>
        </div>
    );
}

export default NameAndEvolution;