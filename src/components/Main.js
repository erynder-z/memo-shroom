import React, { useState } from 'react';
import Score from './Score';
import Game from './Game';

function Main() {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(() => score + 1);
  };

  const resetScore = () => {
    setScore(() => 0);
  };

  return (
    <div className="main-wrapper">
      <div className="score-container">
        <Score currentScore={score} />
      </div>
      <div className="grid-container">
        <Game
          currentScore={score}
          handleScoreUpdate={() => {
            updateScore();
          }}
          handleScoreReset={() => {
            resetScore();
          }}
        />
      </div>
    </div>
  );
}

export default Main;
