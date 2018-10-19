import React, { Component } from 'react'
import About from './About.js'
import {
  Redirect 
} from "react-router-dom";
export class Profile extends Component {
  
  render() {
    if (this.props.match.params.user === '') {
      return <Redirect to="/" />
    }
    const {
      user
    } = this.props.match.params
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
    return (
      <div>
        <div className="App" id="Home">
          <header className="App-Header">
              <div class="text animate-bottom">
                <div class="r">Hello,{user}! <br/>
                  <span className="small-text">
                  \(^O^)/<br/>Get to know me!
                  </span>
                </div>
                <div class="g">Hello,{user}! <br/>
                  <span className="small-text">
                  \(^O^)/<br/>Get to know me!            
                  </span>
                </div>
                <div class="b">Hello,{user}! <br/>
                  <span className="small-text">
                   \(^O^)/<br/>Get to know me!             
                  </span>
                </div>
              </div>
          </header>
          <p class="scroll-down animate-bottom">
            <a class="animate " onClick={()=>handleClickScroll("About")}></a>
          </p>
        </div>
        <About scrollFunction={scrollFunction}  handleClickScroll={handleClickScroll}/>
      </div>
    )
  }
  
}

export default Profile
