import React from 'react';
import ImageIcon from './ImageIcon';

const TypeIcon = ({className, type, size}) => {

    const getTypeImageUrl = () => {
        switch (type) {
            case 'grass':
                return 'https://cdn2.bulbagarden.net/upload/thumb/2/2e/Grass-attack.png/20px-Grass-attack.png';
            case 'fire':
                return 'https://cdn2.bulbagarden.net/upload/thumb/a/ad/Fire-attack.png/20px-Fire-attack.png';
            case 'water':
                return 'https://cdn2.bulbagarden.net/upload/thumb/1/11/Water-attack.png/20px-Water-attack.png';
            case 'lightning':
                return 'https://cdn2.bulbagarden.net/upload/thumb/0/04/Lightning-attack.png/20px-Lightning-attack.png';
            case 'psychic':
                return 'https://cdn2.bulbagarden.net/upload/thumb/e/ef/Psychic-attack.png/20px-Psychic-attack.png';
            case 'fighting':
                return 'https://cdn2.bulbagarden.net/upload/thumb/4/48/Fighting-attack.png/20px-Fighting-attack.png';
            case 'darkness':
                return 'https://cdn2.bulbagarden.net/upload/thumb/a/ab/Darkness-attack.png/20px-Darkness-attack.png';
            case 'metal':
                return 'https://cdn2.bulbagarden.net/upload/thumb/6/64/Metal-attack.png/20px-Metal-attack.png';
            case 'fairy':
                return 'https://cdn2.bulbagarden.net/upload/thumb/4/40/Fairy-attack.png/20px-Fairy-attack.png';
            default:
                return 'https://cdn2.bulbagarden.net/upload/thumb/1/1d/Colorless-attack.png/20px-Colorless-attack.png';
        }
    }

    return ( 
        <ImageIcon className={className} url={getTypeImageUrl()} size={size}/>
    );
}

export default TypeIcon;