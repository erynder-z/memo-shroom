import React, { useState, useEffect } from 'react';
import '../styles/Grid.css';
import Card from './Card';
import deck from './Deck';

function Grid() {
  const [cards, setCards] = useState([
    {
      id: 0,
      name: 'mushroom1',
      image: deck.mushroom1,
      clicked: false,
    },
    {
      id: 1,
      name: 'mushroom2',
      image: deck.mushroom2,
      clicked: false,
    },

    {
      id: 2,
      name: 'mushroom3',
      image: deck.mushroom3,
      clicked: false,
    },
    {
      id: 3,
      name: 'mushroom4',
      image: deck.mushroom4,
      clicked: false,
    },
    {
      id: 4,
      name: 'mushroom5',
      image: deck.mushroom5,
      clicked: false,
    },
    {
      id: 5,
      name: 'mushroom6',
      image: deck.mushroom6,
      clicked: false,
    },
    {
      id: 6,
      name: 'mushroom7',
      image: deck.mushroom7,
      clicked: false,
    },
    {
      id: 7,
      name: 'mushroom8',
      image: deck.mushroom8,
      clicked: false,
    },
    {
      id: 8,
      name: 'mushroom9',
      image: deck.mushroom9,
      clicked: false,
    },
    {
      id: 9,
      name: 'mushroom10',
      image: deck.mushroom10,
      clicked: false,
    },
    {
      id: 10,
      name: 'mushroom11',
      image: deck.mushroom11,
      clicked: false,
    },
    {
      id: 11,
      name: 'mushroom12',
      image: deck.mushroom12,
      clicked: false,
    },
  ]);

  const shuffleCards = () => {
    for (let i = cards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  useEffect(() => {
    shuffleCards();
  }, []);

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
              shuffleCards();
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Grid;
