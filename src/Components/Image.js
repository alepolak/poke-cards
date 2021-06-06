import React from 'react';
import './Card.css';
import { getPokemonBackgroundImage } from '../Services/BackgroundService';

const Image = ({url, alt, type}) => {
    return (
        <div className="cardImage">
            <img className="background" src={getPokemonBackgroundImage(type)} alt="Background"/>
            <img className="pokemon" src={url} alt={alt}/>
        </div>
    );
};

export default Image;