import React, { useState, useEffect } from 'react';
import '../styles/Game.css';
import Card from './Card';
import deck from './Deck';

function Game() {
  const [cards, setCards] = useState(deck);

  const shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  useEffect(() => {
    shuffleCards();
  }, [...cards.map((card) => card.clicked)]);

  const markClicked = (cardID) => {
    const targetID = parseInt(cardID, 10);

    setCards(() => cards.map((card) => (card.id === targetID ? { ...card, clicked: true } : card)));
  };

  return (
    <div className="grid">
      {cards.map((card) => (
        <div key={card.id.toString()} id={card.id.toString()} className="card-container">
          <Card
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
    </div>
  );
}

export default Game;
