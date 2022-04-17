import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/Score.css';

function Score(props) {
  const { currentScore } = props;
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    if (currentScore > highscore) {
      setHighscore(() => currentScore);
    }
  }, [currentScore]);
  return (
    <div className="score-container">
      <div className="score">Score: {currentScore}</div>
      <div className="score">Highscore: {highscore}</div>
    </div>
  );
}

export default Score;

Score.propTypes = {
  currentScore: PropTypes.number.isRequired,
};
