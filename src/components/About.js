import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div>
        <div className="App-Header" id="About">
            About Me
            
        </div>
        <a id="myBtn" className="fas fa-chevron-circle-up" onClick={()=>this.props.handleClickScroll("Home")}></a>
      </div>
    )
  }
}

export default About
