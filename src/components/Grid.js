import React, { useState, useEffect } from 'react';
import '../styles/Grid.css';
import Card from './Card';
import deck from './Deck';

function Grid() {
  const [cards, setCards] = useState([
    {
      fixedID: 0,
      dynamicID: 0,
      name: 'mushroom1',
      image: deck.mushroom1,
      clicked: false,
    },
    {
      fixedID: 1,
      dynamicID: 1,
      name: 'mushroom2',
      image: deck.mushroom2,
      clicked: false,
    },
    {
      fixedID: 2,
      dynamicID: 2,
      name: 'mushroom3',
      image: deck.mushroom3,
      clicked: false,
    },
    {
      fixedID: 3,
      dynamicID: 3,
      name: 'mushroom4',
      image: deck.mushroom4,
      clicked: false,
    },
    {
      fixedID: 4,
      dynamicID: 4,
      name: 'mushroom5',
      image: deck.mushroom5,
      clicked: false,
    },
    {
      fixedID: 5,
      dynamicID: 5,
      name: 'mushroom6',
      image: deck.mushroom6,
      clicked: false,
    },
    {
      fixedID: 6,
      dynamicID: 6,
      name: 'mushroom7',
      image: deck.mushroom7,
      clicked: false,
    },
    {
      fixedID: 7,
      dynamicID: 7,
      name: 'mushroom8',
      image: deck.mushroom8,
      clicked: false,
    },
    {
      fixedID: 8,
      dynamicID: 8,
      name: 'mushroom9',
      image: deck.mushroom9,
      clicked: false,
    },
    {
      fixedID: 9,
      dynamicID: 9,
      name: 'mushroom10',
      image: deck.mushroom10,
      clicked: false,
    },
    {
      fixedID: 10,
      dynamicID: 10,
      name: 'mushroom11',
      image: deck.mushroom11,
      clicked: false,
    },
    {
      fixedID: 11,
      dynamicID: 11,
      name: 'mushroom12',
      image: deck.mushroom12,
      clicked: false,
    },
  ]);

  useEffect(() => {
    console.log('shuffle');
  }, [cards]);

  const markClicked = (cardID) => {
    const targetID = parseInt(cardID, 10);

    setCards(() =>
      cards.map((obj) => (obj.dynamicID === targetID ? { ...obj, clicked: true } : obj))
    );
  };

  return (
    <div className="grid">
      {cards.map((item) => (
        <div key={item.fixedID.toString()} id={item.fixedID.toString()}>
          <Card
            key={item.dynamicID.toString()}
            id={item.dynamicID.toString()}
            name={item.name}
            image={item.image}
            clicked={item.clicked}
            cardClick={(e, cardID) => {
              markClicked(cardID);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Grid;
