import React, { Component } from 'react'
export class Profile extends Component {
  render() {
    
    return (
      <div>
        <div className="App" id="Home">
          <header className="App-Header">
              <div class="text animate-bottom">
                <div class="r">Hello,I'm...Tan! <br/>
                  <span className="small-text">
                    I'm a Software Engineering. <br/>Get to know me!
                  </span>
                </div>
                <div class="g">Hello,I'm...Tan! <br/>
                  <span className="small-text">
                    I'm a Software Engineering. <br/>Get to know me!            
                  </span>
                </div>
                <div class="b">Hello,I'm...Tan! <br/>
                  <span className="small-text">
                    I'm a Software Engineering. <br/>Get to know me!             
                  </span>
                </div>
              </div>
          </header>
        </div>
        <p class="scroll-down animate-bottom">
          <a class="animate" onClick={()=>this.props.handleClickScroll("About")}></a>
        </p>
      </div>
    )
  }
  
}

export default Profile
