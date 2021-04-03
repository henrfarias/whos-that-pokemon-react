import React from 'react';

import './style.css'

const PokemonImage = ({ image }) => {
  return (
    <section className='whos'>
      <img className='whos__pokemon' src={ image } alt='Imagem do pokemon'></img>
    </section>
  );
}

export { PokemonImage };