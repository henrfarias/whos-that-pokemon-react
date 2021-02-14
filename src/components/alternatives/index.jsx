import React from 'react';
import './style.css';

const Alternatives = () => {
  return (
    <form className='form__alternatives' id='Pokeform'>
      <legend class='alternatives__legend'>Quem é este pokemon?</legend>
      <div className='alternative'>
        <label className='alternative__label' for='poke1'>
        <span className='alternative__letter'>A</span>
        Pokemon 1</label>
        <input className='alternative__radio' type='radio' name='poke' id='poke1' />
      </div>
      <div className='alternative'>
        <label className='alternative__label' for='poke1'>
        <span className='alternative__letter'>B</span>
        Pokemon 2</label>
        <input className='alternative__radio' type='radio' name='poke' id='poke2' />
      </div>
      <div className='alternative'>
        <label className='alternative__label' for='poke1'>
        <span className='alternative__letter'>C</span>
        Pokemon 3</label>
        <input className='alternative__radio' type='radio' name='poke' id='poke3' />
      </div>
      <div className='alternative'>
        <label className='alternative__label' for='poke1'>
        <span className='alternative__letter'>D</span>
        Pokemon 4</label>
        <input className='alternative__radio' type='radio' name='poke' id='poke4' />
      </div>
      <div className='alternative'>
        <label className='alternative__label' for='poke1'>
        <span className='alternative__letter'>E</span>
        Pokemon 5</label>
        <input className='alternative__radio' type='radio' name='poke' id='poke5' />
      </div>
      <button className='buttonQuiz' type='button'>Gotcha!</button>
    </form>
  );
}

export { Alternatives };