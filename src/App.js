import react from 'react';
import Card from './Components/Card';
import { getPokemonDataByNumber } from './Services/PokemonService';

const App = () => {
  return (
    <div>
      <Card pokemon={getPokemonDataByNumber(25)}/>
      <Card pokemon={getPokemonDataByNumber(6)}/>
    </div>
  );
}

export default App;
