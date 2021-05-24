import './App.css';
import React from 'react';
import Botao from './Botao';
import Pokedex from './Pokedex';
import pokemonData from './data';


function App() {
  return (

    <div>
     <Pokedex pok= { pokemonData }/>
    </div>
  );
}

export default App;
