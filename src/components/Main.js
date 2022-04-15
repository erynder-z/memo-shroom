import React from 'react';
import Score from './Score';
import Game from './Game';

function Main() {
  return (
    <div className="main-wrapper">
      <div className="score-container">
        <Score />
      </div>
      <div className="grid-container">
        <Game />
      </div>
    </div>
  );
}

export default Main;
