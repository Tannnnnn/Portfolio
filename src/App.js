import React, { Component } from 'react';
import './styles/Portfolio.css';
import './styles/Parallax.scss';
import Anonymous from './components/Anonymous.js'

class App extends Component {
  render() {    
    return (
      <div className="Parallax-bg">
        <Anonymous />
      </div>
    );
  }
}

export default App;
