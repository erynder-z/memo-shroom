import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Victory.css';

function Victory(props) {
  const { currentScore, resetClick } = props;
  return (
    <div className="victory-overlay">
      <div className="victory-body">
        <h2>Impressive</h2>
        <h4>Your score is {currentScore}</h4>
        <p>You got it all right!</p>
      </div>
      <div
        className="restart-button-vi"
        onClick={resetClick}
        onKeyDown={resetClick}
        role="button"
        tabIndex={0}>
        Restart
      </div>
    </div>
  );
}

export default Victory;

Victory.propTypes = {
  currentScore: PropTypes.number.isRequired,
  resetClick: PropTypes.func.isRequired,
};
