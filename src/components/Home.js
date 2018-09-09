import React, { Component } from 'react';
import Card from './Card';
import data from '../data/data.json';

class Home extends Component {
  state = { cards: data }
  render() { 
    return ( 
      <div className="Grid animated bounceInUp">
        {
          this.state.cards.map((card) => (
            <Card 
              duration={150} 
              key={card.id} 
              card={card} 
            />
          ))
        }
      </div>
     )
  }
};
 
export default Home;
