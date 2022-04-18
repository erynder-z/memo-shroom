import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Gameover from './Gameover';
import deck from './Deck';
import Victory from './Victory';
import '../styles/Game.css';

function Game(props) {
  const [cards, setCards] = useState(deck);
  const [gameover, setGameover] = useState(false);
  const { handleScoreUpdate, handleScoreReset, currentScore } = props;

  const shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  const markClicked = (cardID) => {
    const targetID = parseInt(cardID, 10);

    const cardBefore = cards.find((card) => card.id === targetID);
    if (cardBefore.clicked === true) {
      setGameover(() => true);
    } else {
      setCards(() =>
        cards.map((card) => (card.id === targetID ? { ...card, clicked: true } : card)),
      );
      handleScoreUpdate();
    }
  };

  const resetGame = () => {
    setCards(() => deck);
    setGameover(() => false);
    handleScoreReset();
  };

  useEffect(() => {
    shuffleCards();
  }, [...cards.map((card) => card.clicked)]);

  shuffleCards();

  return (
    <div className="grid">
      {cards.map((card) => (
        <div key={card.id.toString()} id={card.id.toString()} className="card-container">
          <Card
            gameover={gameover}
            key={card.id.toString()}
            id={card.id.toString()}
            name={card.name}
            image={card.image}
            clicked={card.clicked}
            cardClick={(e, cardID) => {
              markClicked(cardID);
            }}
          />
        </div>
      ))}
      {currentScore >= 18 && <Victory currentScore={currentScore} resetClick={resetGame} />}
      {gameover === true && <Gameover currentScore={currentScore} resetClick={resetGame} />}
    </div>
  );
}

export default Game;

Game.propTypes = {
  handleScoreUpdate: PropTypes.func.isRequired,
  handleScoreReset: PropTypes.func.isRequired,
  currentScore: PropTypes.number.isRequired,
};
