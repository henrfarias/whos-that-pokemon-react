import React from 'react';
import { Alternatives } from '../../components/alternatives';
import { PokemonImage } from '../../components/pokemonImage';

import './style.css';

const GameQuiz = () => {
  
  return (
    <div className='game__container'>
      <PokemonImage />
      <Alternatives />
    </div>
  );
}
  // const query = new URLSearchParams(useLocation().search);
       /* <h1>
        {query.get('name')}
      </h1> */
export { GameQuiz };