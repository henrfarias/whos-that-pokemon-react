import React from 'react';

import './style.css'

const PokemonImage = () => {
  return (
    <section className='whos'>
      <img class='whos__pokemon' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg' alt='Imagem do pokemon'></img>
    </section>
  );
}

export { PokemonImage };