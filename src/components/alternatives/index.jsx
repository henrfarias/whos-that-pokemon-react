import React from 'react';
import './style.css';

const Alternatives = ( { choosePokemon, otherOptions } ) => {
  
  return (
    <form className='form__alternatives' id='Pokeform'>
      <legend className='alternatives__legend'>Quem é este pokemon?</legend>
      
      <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke1' />
        <label className='alternative__label' htmlFor='poke1'>
        <span className='alternative__letter'>1</span>
        { choosePokemon }</label>
      </div>

      {otherOptions.map((option, index) => {
        console.log(index + 2);
        return(
          <div key={option.id} className='alternative'>
            <input className='alternative__radio' type='radio' name='poke' id={`poke${index + 2}`} />
            <label className='alternative__label' htmlFor={`poke${index + 2}`}>
            <span className='alternative__letter'>{index + 2}</span>
            { option.name }</label>
          </div>
        );
      })}

      {/* <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke2' />
        <label className='alternative__label' htmlFor='poke2'>
        <span className='alternative__letter'>b</span>
        pokemon 2</label>
      </div>
      <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke3' />
        <label className='alternative__label' htmlFor='poke3'>
        <span className='alternative__letter'>c</span>
        Pokemon 3</label>
      </div>
      <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke4' />
        <label className='alternative__label' htmlFor='poke4'>
        <span className='alternative__letter'>d</span>
        Pokemon 4</label>
      </div>
      <div className='alternative'>
        <input className='alternative__radio' type='radio' name='poke' id='poke5' />
        <label className='alternative__label' htmlFor='poke5'>
        <span className='alternative__letter'>e</span>
        Pokemon 5</label>
      </div> */}
      <button className='buttonQuiz' type='button'>Gotcha!</button>
    </form>
  );
}

export { Alternatives };