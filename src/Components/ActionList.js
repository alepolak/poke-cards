import react from 'react';
import ActionItem from './ActionItem';
import './ActionList.css';

const ActionList = ({ pokemonActions }) => {
    const getActionItems = () => {
        let elements = [];
        const actions = pokemonActions.map(action => {
            return <ActionItem key={action.name} actionType={action.type} name={action.name} description={action.description} energyAmount={action.energyAmount} energyType={action.energyType} damage={action.damage}/>;
        });
        
        for (const i in actions) {
            elements.push(actions[i]);
            if(i < actions.length-1)
                elements.push(<hr key={elements.length+1} className="separator" />);
        }

        return elements;
    }

    return (
        <div className="action-container">
            {getActionItems()}
        </div>
    );
};

export default ActionList;