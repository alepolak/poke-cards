import React, { useEffect, useState, useRef } from 'react';
import Image from './Image';
import NameAndEvolution from './NameAndEvolution';
import ImageIcon from './ImageIcon';
import TypeIcon from './TypeIcon';
import ActionList from './ActionList';
import WeaknessResistanceRetreat from './WeaknessResistanceRetreat';
import './Card.css';
import { getCardBackgroundImage } from '../Services/BackgroundService';

const Card = ({ pokemon }) => {

    const cardRef = useRef();

    //reference https://www.misatocomics.com.ar/liga-misato-pokemon-tcg/guia-de-expansiones-pokemon-tcg/
    const firstEditionUrl = 'https://cdn2.bulbagarden.net/upload/0/0b/1st_edition_English.png';
    const promoUrl = 'https://www.misatocomics.com.ar/wp-content/uploads/2020/05/xy-promos-pokemon-set-symbol.png';

    const [backgroundStyle, setBackgroundStyle] = useState();

    useEffect(() => {
        setBackgroundStyle({
            backgroundImage: `url(${getCardBackgroundImage(pokemon.type)})`
        });

        if(pokemon.type === 'darkness') {
            cardRef.current.querySelectorAll('p').forEach(e => e.className += ' white');
        }

    }, []);

    return(
        <div ref={cardRef} style={backgroundStyle} className="card">
            <div>
                <div className="center">        
                    <div className="topBar">
                        <NameAndEvolution pokemonName={pokemon.name} evolutionNumber={pokemon.evolutionNumber} evolutionFrom={pokemon.evolutionFrom} />
                        <div className="health">
                            <p>{pokemon.health} HP</p>
                            <TypeIcon type={pokemon.type}/>
                        </div>
                    </div>
                    <Image url={pokemon.image} alt={pokemon.imageAlt} type={pokemon.type}/>
                </div>
                <div className="pokemon-and-card-description">
                    <div>
                        <ImageIcon url={firstEditionUrl} size={4}/>
                    </div>
                    <div className="pokemon-description">
                        <p>
                            {pokemon.description}
                        </p>
                    </div> 
                    <div>
                        <ImageIcon url={promoUrl} size={4}/>
                    </div>
                </div>
                <ActionList pokemonActions={pokemon.actions}/>
                <WeaknessResistanceRetreat
                    weaknessData={pokemon.weaknessData}
                    resistanceData={pokemon.resistanceData}
                    retreatData={pokemon.retreatData}
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