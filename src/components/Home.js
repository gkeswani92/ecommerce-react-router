import React, { Component } from 'react';
import Card from './Card';

const Home = (props) => {
  return (
    <div className="Grid animated bounceInUp">
        {
          props.cards.map((card) => (
            <Card 
              duration={150} 
              key={card.id} 
              card={card} 
            />
          ))
        }
      </div>
  );
};
 
export default Home;
