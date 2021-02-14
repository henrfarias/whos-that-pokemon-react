import React from 'react';
import './style.css';

import Gotcha from '../../utils/Gotcha.svg'

const LeaderboardContent = () => {

 
  return (
    <div className='leaderboard'>
      <img className='leaderboard__image' src={ Gotcha } alt='Gotcha, tabela de líderes'></img>
      <ol className='leaderboard__list'>
        <li className='leaderboard__item'>Athur</li>
        <li className='leaderboard__item'>Henrique</li>
        <li className='leaderboard__item'>Vigina</li>
      </ol>
    </div>
  );
}

export { LeaderboardContent };