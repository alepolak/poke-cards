import react from 'react';
import './WeaknessResistanceRetreat.css';
import TypeIcon from './TypeIcon';

const WeaknessResistanceRetreat = ({weaknessData, resistanceData, retreatCostData}) => {

    const getAmountOfType = (amount, type) => {
        let types = [];
        for (let i = 0; i < amount; i++) {
            types.push(<TypeIcon key={i} type={type} size={3} />);           
        }
        return types;
    } 

    const getEnergyIconsFromData = (data) => {
        if(data) {
            if(data.modifier) {
                return (
                    <div className="energy-data">
                        {getAmountOfType(data.amount, data.type)}
                        <p className="data-modifier">{data.modifier}</p>
                    </div>
                );
            }
            else
                return <div className="energy-data">{getAmountOfType(data.amount, data.type)}</div>;
        }
        
        return null;
    }

    return (
        <div className="weakness-resistance-retreat-element">
            <div className="element">
                <p className="title">weakness</p>
                {getEnergyIconsFromData(weaknessData)}
            </div>
            <div className="element">    
                <p className="title">resistance</p>
                {getEnergyIconsFromData(resistanceData)}
            </div>
            <div className="element">               
                <p className="title">retreat</p>
                {getEnergyIconsFromData(retreatCostData)}
            </div>
        </div>
    );
}

export default WeaknessResistanceRetreat;