import React, { Component } from 'react'

export class About extends Component {
  render() {  
    const checkTime = () => {
      const time = new Date();
      const helloTime = time.getHours();
      if( helloTime >= 6 && helloTime < 13){
        return "☀ Good Morning ☀"
      }
      if( helloTime >= 13 && helloTime < 20 ){
        return "☁ Good Evening ☁"
      }
      if( helloTime >= 20 && helloTime < 6){
        return "☾ Good Night ☽"
      }
    }
    const time = new Date();
    const helloTime = time.getHours();
    return (
      <div id="About">
        <div className="App-Header">
          <span id="myTextAbout">
            <center className="animate-center">
              <h1>{checkTime()}, Lady and Gentleman! ^^</h1>
            </center> 
          </span>
        </div>
        <a id="myBtn" className="fas fa-chevron-circle-up animate-center" onClick={()=>this.props.handleClickScroll("Home")}></a>
      </div>
    )
  }
}

export default About
