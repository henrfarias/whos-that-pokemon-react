import React from 'react';

import { Header } from '../../components/header';

import { ContentWrapper } from '../../components/contentWrapper';

import { LeaderboardContent } from '../../components/leaderboardContent';

const Leaderboard = () => {
  return (
    <div className='container'>
      <Header title= 'Leaderboard' />
      <ContentWrapper>
        <LeaderboardContent />
      </ContentWrapper>
    </div>
  );
}

export { Leaderboard };