import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

function Card(props) {
  const { id, name, image, cardClick } = props;
  return (
    <div
      className="card"
      id={id}
      name={name}
      onClick={(e) => {
        cardClick(e, id);
      }}
      aria-hidden="true">
      <img src={image} alt="card" />
    </div>
  );
}

export default Card;
Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cardClick: PropTypes.func.isRequired,
};
