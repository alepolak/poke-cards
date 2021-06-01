import react from 'react';
import './ActionItem.css';
import TypeIcon from './TypeIcon';

const AttackItem = ({name, description, energyAmount, energyType, damage, actionType}) => {

    const getEnergyIcons = () => {

        switch (energyAmount) {
            case 1:
                return (
                    <div className="even-energy-types">
                        <TypeIcon type={energyType}/>
                    </div>
                );
            case 2:
                return (
                    <div className="even-energy-types">
                        <TypeIcon type={energyType}/>
                        <TypeIcon type={energyType}/>
                    </div>
                ); 
            case 3:
                return (
                    <div className="three-energy-types">
                        <div className="even-energy-types">
                            <TypeIcon type={energyType}/>
                            <TypeIcon type={energyType}/>
                        </div>
                        <div className="even-energy-types">
                            <TypeIcon type={energyType}/>
                        </div>
                    </div>
                ); 
            case 4:
                return (
                    <div className="even-energy-types ">
                        <div>
                            <TypeIcon type={energyType}/>
                            <TypeIcon type={energyType}/>
                        </div>
                        <div>
                            <TypeIcon type={energyType}/>
                            <TypeIcon type={energyType}/>
                        </div>
                    </div>
                );       
            default:
                return null;
        }
    }

    const getAttackElement = () => {
        return (
            <div className="item">
                <div className="energy-slot">
                    {getEnergyIcons()}       
                </div>
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