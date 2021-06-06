import React, {useEffect, useRef} from 'react';
import './ActionItem.css';
import TypeIcon from './TypeIcon';

const AttackItem = ({name, description, energyAmount, energyType, damage, actionType}) => {

    const powerRef = useRef();
    const powerRef_parent = useRef();
   
    const attackRef = useRef();
    const attackRef_parent = useRef();
  
    const effectRef = useRef();
    const effectRef_parent = useRef();

    useEffect(() => {
        if(powerRef.current && powerRef_parent.current) {
            resizeText({
                element: powerRef.current,
                parent: powerRef_parent.current
              })
        }  
    },[powerRef.current]);

    
    useEffect(() => {
        if(attackRef.current && attackRef_parent.current) {
            resizeText({
                element: attackRef.current,
                parent: attackRef_parent.current
              })
        }  
    },[attackRef.current]);

    
    useEffect(() => {
        if(effectRef.current && effectRef_parent.current) {
            resizeText({
                element: effectRef.current,
                parent: effectRef_parent.current
              })
        }          
    },[effectRef.current]);

    const isOverflown = ({ clientHeight, scrollHeight }) => scrollHeight > clientHeight;

    const resizeText = ({ element, parent }) => {

        let i = 5; // let's start with 12px
        let overflow = false;
        const maxSize = 24; // very huge text size

        while (!overflow && i < maxSize) {
            element.style.fontSize = `${i}px`;

            overflow = isOverflown(parent);
            if (!overflow) 
                i++;
        }
      
        // revert to last state where no overflow happened:
        element.style.fontSize = `${i - 1}px`;
    }

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
            <div ref={attackRef_parent} className="item">
                {getEnergyIcons()}       
                <p ref={attackRef} className="attack-description-slot">
                    <span className="name">{name} </span>
                    {description}
                </p>
                <div className="damage-slot">
                    <p>{damage}</p>
                </div>
            </div>
        );
    }

    const getEffectElement = () => {
        return (
            <div ref={effectRef_parent} className="item">
                <div className="energy-slot">
                    {getEnergyIcons()}       
                </div>
                <p ref={effectRef} className="effect-description-slot">
                    <span className="name">{name} </span>
                    {description}
                </p>
            </div>
        );
    }

    const getPowerElement = () => {
        return (
            <div ref={powerRef_parent} className="item">
                <p ref={powerRef} className="power-description-slot">
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