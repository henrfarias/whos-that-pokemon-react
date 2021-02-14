import React from 'react';

import './style.css';

import pokeball from '../../utils/Pokeball.svg'

const Header = ({ title }) => {  
  return (
    <div className='content'>
      <img src={ pokeball } alt='pokeball' />
      <h1> { title } </h1>  
    </div>
  )
}

export { Header };
