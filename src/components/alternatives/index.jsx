import React from 'react';
import './style.css';

const Alternatives = () => {
  return (
    <form className='form__alternatives' id='Pokeform'>
      <legend class='alternatives__legend'>Quem é este pokemon?</legend>
      <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke1' />
        <label className='alternative__label' for='poke1'>
        <span className='alternative__letter'>A</span>
        Pokemon 1</label>
      </div>
      <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke2' />
        <label className='alternative__label' for='poke2'>
        <span className='alternative__letter'>B</span>
        Pokemon 2</label>
      </div>
      <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke3' />
        <label className='alternative__label' for='poke3'>
        <span className='alternative__letter'>C</span>
        Pokemon 3</label>
      </div>
      <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke4' />
        <label className='alternative__label' for='poke4'>
        <span className='alternative__letter'>D</span>
        Pokemon 4</label>
      </div>
      <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke5' />
        <label className='alternative__label' for='poke5'>
        <span className='alternative__letter'>E</span>
        Pokemon 5</label>
      </div>
      <button className='buttonQuiz' type='button'>Gotcha!</button>
    </form>
  );
}

export { Alternatives };