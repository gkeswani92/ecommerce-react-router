import React from 'react';
import './Navigation.css';

const Navigation = (props) => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
    <div className="overlay-content">
      <a href="">Home</a>  
      <a href="">Vitamin Juice</a>
      <a href="">Clothing</a>
      <a href="">Supplements</a>
      <a href="">Contact</a>
    </div>
  </div>
);

export default Navigation;
