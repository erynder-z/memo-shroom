import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Score.css';

function Score(props) {
  const { currentScore } = props;
  return <div className="score">Score: {currentScore}</div>;
}

export default Score;

Score.propTypes = {
  currentScore: PropTypes.number.isRequired,
};
