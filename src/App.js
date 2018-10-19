import React, { Component } from 'react';
import './styles/Portfolio.css';
import './styles/Parallax.scss';
import Profile from './components/Profile.js'
import Parallax from './components/Parallax.js'
import Anonymous from './components/Anonymous.js'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {    
    return (
      <div className="Parallax-bg">
        <Parallax />
        <Router>
          <div>
              <Route exact path="/" component={Anonymous} />
              <Route exact path="/Profile/:user" component={Profile} />
              <Redirect to="/" />
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
