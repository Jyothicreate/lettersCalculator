// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  updateSearchInput = event => {
    this.setState({
      count: event.target.value,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <div className="calculator-container">
            <h1>Calculate the Letters you enter</h1>
            <div className="phrase-container">
              <label htmlFor="letter">Enter the phrase</label>
              <br />
              <input
                type="text"
                id="letter"
                className="text-holder"
                placeholder="Enter the phrase"
                onChange={this.updateSearchInput}
              />
            </div>
            <br />
            <p type="button" className="num-button">
              No.of letters: {count.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
