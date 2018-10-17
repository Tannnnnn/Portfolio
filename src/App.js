import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/Portfolio.css';
import './styles/Parallax.scss';
import Profile from './components/Profile.js'
import Parallax from './components/Parallax.js'

class App extends Component {
  render() {
    return (
      <div className="Parallax-bg">
        <Parallax />
        <Profile />
      </div>
    );
  }
}

export default App;
