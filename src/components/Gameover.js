import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Gameover.css';

function Gameover(props) {
  const { currentScore, resetClick } = props;
  return (
    <div className="gameover-overlay">
      <div className="gameover-body">
        <h2>Game over</h2>
        <h4>Your score is {currentScore}</h4>
        {currentScore < 18 && <p>Can you get 18 points?</p>}
      </div>
      <div
        className="restart-button"
        onClick={resetClick}
        onKeyDown={resetClick}
        role="button"
        tabIndex={0}>
        Restart
      </div>
    </div>
  );
}

export default Gameover;

Gameover.propTypes = {
  currentScore: PropTypes.number.isRequired,
  resetClick: PropTypes.func.isRequired,
};
