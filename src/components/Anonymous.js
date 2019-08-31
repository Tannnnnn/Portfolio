/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
export class Anonymous extends Component {
  state = {
    randomValue: '',
    selectCountry: 'SP',
  }

  handleSetSelectCountry = e => {
      this.setState({ 
          randomValue : '',
          selectCountry : e.target.value,
          copyText: ''
      })
  }

  handleSetRandomValue = () => {
      const { selectCountry } = this.state
      const max = selectCountry === 'SP' ? 99999999 : 999999999
      const min = selectCountry === 'SP' ? 10000000 : 100000000
      const fnumber = selectCountry === 'SP' ? '+65' : '+855'
      const data = Math.floor(Math.random() * (max - min) + min)
      this.setState({ 
        randomValue : `${fnumber}${data}`
      })
      const copyText = document.getElementById("randomInput");
      copyText.value = `${fnumber}${data}`
      copyText.select();
      document.execCommand("copy");
      if (copyText.value) {
        this.setState({ copyText : `ก็อปปี้สำเร็จ!` })
        setTimeout(() => {
            this.setState({ copyText : '' })
        }, 2000);
      }
  }


  render() {
    return (
      <div>
        <header className="App-Header">
            <center>
              <h1 className="title" style={{ color : "#fff" , marginBottom: 40 }}>
                  โปรแกรมสุ่มหมายเลขโทรศัพท์
              </h1>
            </center>
            <div className="field has-addons">
                <p className="control is-expanded">
                    <span className="select">
                        <select onChange={this.handleSetSelectCountry}>
                            <option value="SP">สิงค์โปร +65</option>
                            <option value="KB">กัมพูชา +855</option>
                        </select>
                    </span>
                </p>
                <p className="control is-expanded">
                    <input className="input" type="text" placeholder="กดปุ่ม Random เพื่อสุ่ม" value={this.state.randomValue} id="randomInput" />
                </p>
                <p className="control is-expanded">
                    <a className="button is-info" onClick={this.handleSetRandomValue}>
                        Random
                    </a>
                </p>
            </div>
            <center>
              <h2 className="title" style={{ color : "#fff" }}>
                  {this.state.copyText}
              </h2>
            </center>
        </header>
      </div>
    )
  }
}

export default Anonymous
