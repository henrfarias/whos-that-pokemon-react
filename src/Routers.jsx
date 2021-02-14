import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { LandingPage } from './pages/landingPage';
import { Leaderboard } from './pages/leaderboard';
import { GameQuiz } from './pages/gameQuiz';


const Routers = () => {
  return (
    <Router>
    <Switch>
      <Route path='/' exact>
        <LandingPage />
      </Route>
    <Switch>
      <Route path='/gamequiz'>
        <GameQuiz />
      </Route>
    </Switch>
    </Switch>
      <Route path='/leaderboard'>
        <Leaderboard />
      </Route>
    <Switch>

      </Switch>
    </Router>
  );
}

export { Routers };

