import React from 'react';
import './ActionItem.css';
import TypeIcon from './TypeIcon';

const AttackItem = ({name, description, energyAmount, energyType, damage, actionType}) => {

    const getEnergyIcons = () => {
        let energy = [];
        for (let i = 0; i < energyAmount; i++) {
            energy.push(<TypeIcon key={i} type={energyType}/>);
        }

        return (
            <div className="energy-slot">
                {energy}
            </div>
        );
    } 

    const getAttackElement = () => {
        return (
            <div className="item">
                {getEnergyIcons()}       
                <p className="attack-description-slot">
                    <span className="name">{name} </span>
                    {description}
                </p>
                <div className="damage-slot">
                    {damage}
                </div>
            </div>
        );
    }

    const getEffectElement = () => {
        return (
            <div className="item">
                <div className="energy-slot">
                    {getEnergyIcons()}       
                </div>
                <p className="effect-description-slot">
                    <span className="name">{name} </span>
                    {description}
                </p>
            </div>
        );
    }

    const getPowerElement = () => {
        return (
            <div className="item">
                <p className="power-description-slot">
                    <span className="name">Pokemon Power: {name} </span>
                    {description}
                </p>
            </div>
        );
    }

    const getActionElement = () => {
        if(actionType === "attack") {
            return getAttackElement();
        } else if (actionType === "effect") {
            return getEffectElement();
        } else if (actionType === "power") {
            return getPowerElement();
        }
        return null;
    }

    return getActionElement();
}

export default AttackItem;