import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.png';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Vitamin from './components/Vitamin';
import data from './data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo:  true,
      cards: [],
    }
    this.toggleLogo = this.toggleLogo.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  // This function gets called right before the component is mounted
  // and after it is known that the component is going to mount
  componentWillMount() {
    this.setState({
      cards: data,
    })
  }

  toggleLogo(event) {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  render() {
    return (
      <Router>
        {/* Router is the component that has to wrap the entire application */}
        <div className="App">
          <header className="App-header">
            <img src={logo} 
              className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'} 
              alt="logo"
              onMouseEnter={this.toggleLogo}
              onMouseLeave={this.toggleLogo}
              onClick={this.openNav}
            />
            <h1
              className={this.state.toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}
              onClick={this.openNav}
            >Menu</h1>
            <Navigation closeNav={this.closeNav} />
          </header>
          {/*  
            - The switch component allows us to switch between routes.
            - It goes through all routes until one matches. The one that matches
            then renders its corresponding component.
            - If it does not match with any route, we can set a default route 
            that will be executed.
          */}
          <Switch>
            {/* 
            This path will only be called if someone is coming to the '/' path of the website
            since we are using exact path
            <Route exact path="/" component={Home}/>

            Since we also want to pass in some props to the component being rendered, we use the
            render property in the way shown below
             */}
            <Route exact path="/" render={(props) => (
              <Home cards={this.state.cards} />
            )} />

            {/*
            This path will be called as far as someone uses a path that starts with the vitamin
            i.e. /vitamin or /vitamin/productA etc.
            */}
            <Route path="/vitamin" component={Vitamin} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
