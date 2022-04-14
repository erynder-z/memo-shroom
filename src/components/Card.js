import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

function Card(props) {
  const { id, name, image, clicked, cardClick } = props;
  return (
    <div
      className="card"
      id={id}
      name={name}
      clicked={clicked}
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
  clicked: PropTypes.bool.isRequired,
  cardClick: PropTypes.func.isRequired,
};
