import React from 'react';
import Card from './Components/Card';
import { getPokemonDataByNumber } from './Services/PokemonService';
import './App.css';

const App = () => {
  return (
    <div className="album">
      <Card pokemon={getPokemonDataByNumber(25)}/>
      <Card pokemon={getPokemonDataByNumber(6)}/>
    </div>
  );
}

export default App;
