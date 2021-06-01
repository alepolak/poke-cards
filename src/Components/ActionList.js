import react from 'react';
import ActionItem from './ActionItem';
import './ActionList.css';

const ActionList = ({ pokemonActions }) => {
    const getActionItems = () => {
        return pokemonActions.map(action => {
            return <ActionItem key={action.name} actionType={action.type} name={action.name} description={action.description} energyAmount={action.energyAmount} energyType={action.energyType} damage={action.damage}/>;
        });
    }

    return (
        <div className="action-container">
            {getActionItems()}
        </div>
    );
};

export default ActionList;