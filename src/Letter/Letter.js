import React, { Component } from 'react';

export default class Letter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLetter: true
    }
  }
  render() {
    return (
      <span>
        {
          this.state.showLetter ?
            <button onClick={() => {
              this.props.makeGuess(this.props.letter.toLowerCase())
              this.setState({ showLetter: false })
            }}>{this.props.letter}</button>
            :
            <p>X</p>
        }
      </span>
    )
  }
}