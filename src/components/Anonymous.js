import React, { Component } from 'react'
import {
  Redirect ,
  NavLink
} from "react-router-dom";
import { stat } from 'fs';

export class Anonymous extends Component {
  constructor(props){
    super(props)
    this.state = {
      user : undefined,
      keyState : false
    }
  }

  handleKeyUser = (e) => {
    let { user } = this.state
    if (e.keyCode === 32) {
      alert("ห้ามกรอกช่องว่างในชื่อ ?")
    }
    else{
      this.setState({ user : user = e.target.value})
      if (e.keyCode === 13) {        
        if (user === '') {
          alert('กรอกไอ้สัส')
        }
        else
          this.setState({ keyState : true })
      }
    }
  }

  render() {
    if (this.state.keyState === true) {
      return <Redirect to={`/Profile/${this.state.user}`} />
    }
    let disabledButton = ""
    if (this.state.user === '' || this.state.user === undefined) {
      disabledButton = "hidden-an"
    }

    return (
      <div>
        <header className="App-Header">
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input 
                className="input is-large is-focused" 
                type="text" 
                placeholder="Fill in Nickname ^^" 
                autofocus="autofocus"
                onKeyUp={this.handleKeyUser}
                maxlength="9"
              />
              <span className="icon is-left">
                <i className="fas fa-user-astronaut"></i>
              </span>
              <span className="icon is-right">
                <i className="fab fa-angellist"></i>
              </span>
            </div>
          </div>     
          <div className={disabledButton}>
            <NavLink 
              className="button is-success is-medium button-font" 
              to={`/Profile/${this.state.user}`} 
            >
              Do it !
            </NavLink>
          </div>   
        </header>
      </div>
    )
  }
}

export default Anonymous
