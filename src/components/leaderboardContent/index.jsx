import React from 'react';
import './style.css';

import Gotcha from '../../utils/Gotcha.svg'
import first from '../../utils/first.svg'
import second from '../../utils/second.svg'
import third from '../../utils/third.svg'

const LeaderboardContent = () => {

 
  return (
    <div className='leaderboard'>
      <img className='leaderboard__image' src={ Gotcha } alt='Gotcha, tabela de líderes'></img>
      <ol className='leaderboard__list'>
        <li className='leaderboard__item'><img className='leaderboard__podium' src={ first } alt='Primeiro Lugar'></img>Athur<span className='leaderboard__points'>100 <br /> pontos</span></li>
        <li className='leaderboard__item'><img className='leaderboard__podium' src={ second } alt='Segundo Lugar'></img>Henrique <span className='leaderboard__points'>80 <br /> pontos</span></li>
        <li className='leaderboard__item'><img className='leaderboard__podium' src={ third } alt='Terceiro Lugar'></img>Vigina <span className='leaderboard__points'>60 <br /> pontos</span></li>
        <li className='leaderboard__item'><span className='leaderboard__position'>#4</span> Luigi <span className='leaderboard__points'>60 <br /> pontos</span></li>
      </ol>
    </div>
  );
}

export { LeaderboardContent };