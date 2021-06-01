import React from 'react';

const ImageIcon = ({className, url, size}) => {

    const getSize = () => {
        switch (size) {
            case 1:
                return 'energy';
            case 2:
                return 'normal';
            case 3:
                return 'mini';
            default:
                return 'energy';
        }  
    }

    return (
        url ? <img src={url} className={`${className} ${getSize(size)} imageIcon`}/> : null
    );
}

export default ImageIcon;