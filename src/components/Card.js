import React from 'react';
import './Card.css';

const Card = (props) =>  (
  <div className={props.card.animation}>
    <div className="front">
      <img src="juice.jpg" alt="Avatar" className="card-image" />
      <div className="container">
        <h3>{props.card.title}</h3>
        <h3><span className="price"> ${props.card.price}</span></h3> 
        <p>{props.card.description}</p>
      </div>
    </div>
  </div>
);

export default Card;
