import React from 'react';
import Score from './Score';
import Grid from './Grid';

function Main() {
  return (
    <div className="main-wrapper">
      <div className="score-container">
        <Score />
      </div>
      <div className="grid-container">
        <Grid />
      </div>
    </div>
  );
}

export default Main;
