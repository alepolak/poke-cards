import React, { useEffect, useState } from 'react';
import Image from './Image';
import NameAndEvolution from './NameAndEvolution';
import ImageIcon from './ImageIcon';
import TypeIcon from './TypeIcon';
import ActionList from './ActionList';
import WeaknessResistanceRetreat from './WeaknessResistanceRetreat';
import './Card.css';
import { getBackgroundImage } from '../Services/BackgroundService';

const Card = ({ pokemon }) => {
    const firstEditionUrl = 'https://cdn2.bulbagarden.net/upload/0/0b/1st_edition_English.png';
    const promoUrl = 'https://help.tcgplayer.com/hc/article_attachments/360039866994/unnamed-2.jpg';
    
    const [backgroundStyle, setBackgroundStyle] = useState();

    useEffect(() => {
        setBackgroundStyle({
            backgroundImage: `url(${getBackgroundImage(pokemon.type)})`
        });
    }, []);

    return(
        <div style={backgroundStyle} className="card">
            <div>
                <div className="center">        
                    <div className="topBar">
                        <NameAndEvolution pokemonName={pokemon.name} evolutionNumber={pokemon.evolutionNumber} evolutionFrom={pokemon.evolutionFrom} />
                        <div className="health">
                            <p>{pokemon.health} HP</p>
                            <TypeIcon type={pokemon.type}/>
                        </div>
                    </div>
                    <Image url={pokemon.image} alt={pokemon.imageAlt}/>
                </div>
                <div className="pokemon-and-card-description">
                    <div>
                        <ImageIcon url={firstEditionUrl} size={4}/>
                    </div>
                    <p className="pokemon-description">
                        {pokemon.description}
                    </p> 
                    <div>
                        <ImageIcon url={promoUrl} size={4}/>
                    </div>
                </div>
                <ActionList pokemonActions={pokemon.actions}/>
                <WeaknessResistanceRetreat
                    weaknessData={pokemon.weaknessData}
                    resistanceData={pokemon.resistanceData}
                    retreatCostData={pokemon.retreatCostData}
                />
                <div className="pokemon-random-fact-box" >
                    <p>
                        {pokemon.randomFact}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Card;