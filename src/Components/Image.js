import React from 'react';
import './Card.css';

const Image = ({url, alt}) => {
    return (
        <div className="cardImage">
            <img src={url} alt={alt}/>
        </div>
    );
};

export default Image;