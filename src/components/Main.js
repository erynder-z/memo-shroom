import React, { useState } from 'react';
import Score from './Score';
import Game from './Game';

function Main() {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(() => score + 1);
  };

  return (
    <div className="main-wrapper">
      <div className="score-container">
        <Score currentScore={score} />
      </div>
      <div className="grid-container">
        <Game
          handleScoreUpdate={() => {
            updateScore();
          }}
        />
      </div>
    </div>
  );
}

export default Main;
