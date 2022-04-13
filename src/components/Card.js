import React from 'react';
import '../styles/Card.css';

function Card(props) {
  const card = {
    id: props.id,
    name: props.name,
    image: props.image,
    clicked: props.clicked,
  };
  return (
    <div
      className="card"
      id={card.id}
      name={card.name}
      clicked={card.clicked}
      onClick={(e) => {
        props.cardClick(e, card.id);
      }}>
      <img src={card.image} alt="card" />
    </div>
  );
}

export default Card;
