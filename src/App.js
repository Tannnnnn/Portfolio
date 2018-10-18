import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/Portfolio.css';
import './styles/Parallax.scss';
import Profile from './components/Profile.js'
import Parallax from './components/Parallax.js'
import About from './components/About.js'

class App extends Component {
  render() {
    const handleClickScroll = (Scroll) => {
      const element = document.getElementById(`${Scroll}`);
          element.scrollIntoView({behavior: 'smooth'});
    }
    window.onscroll = function() {scrollFunction()};
    const scrollFunction = () => {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            document.getElementById("myBtn").style.display = "block";
            document.getElementById("myTextAbout").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
            document.getElementById("myTextAbout").style.display = "none";
        }
    }

    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
      <div className="Parallax-bg">
        <Parallax />
        <Profile handleClickScroll={handleClickScroll}/>
        <About scrollFunction={scrollFunction}  handleClickScroll={handleClickScroll}/>
      </div>
    );
  }
}

export default App;
