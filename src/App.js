import React, {useState, useEffect} from 'react';
import Card from './Components/Card';
import { getOriginalPokemons } from './Services/PokemonService';
import './App.css';

const App = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    showCards();
  },[]);

  const showCards = async () => {
    const pokemons = await getOriginalPokemons(152);
    const cards = pokemons.map(pokemon => {
      if(pokemon) {
        return <Card key={pokemon.name} pokemon={pokemon}/>
      }
      return null;
    });
    
    setCards(cards);
  }

  return (
    <div className="album">
      {cards}
    </div>
  );
}

export default App;
