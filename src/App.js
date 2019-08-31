import React, { Component } from 'react';
import './styles/Portfolio.css';
import './styles/Parallax.scss';
import Anonymous from './components/Anonymous.js'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {    
    return (
      <div className="Parallax-bg">
        <Router>
          <div>
              <Route exact path="/" component={Anonymous} />
              <Redirect to="/" />
          </div>
        </Router>
      </div>
      
    );
  }
}

export default App;
