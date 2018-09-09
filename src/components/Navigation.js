import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
    <div className="overlay-content">
      {/* 
        The path defined in the 'to' section of the Link component is what the switch 
        will be looking for in the routes.
      */}
      <Link to="/" onClick={() => props.closeNav()}>Home</Link>
      <Link to="/vitamin" onClick={() => props.closeNav()}>Vitamin Juice</Link>
      <a href="">Clothing</a>
      <a href="">Supplements</a>
      <a href="">Contact</a>
    </div>
  </div>
);

export default Navigation;
