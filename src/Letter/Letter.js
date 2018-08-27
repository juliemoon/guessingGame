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
      <div>
        {
          this.state.showLetter ?
            <button onClick={() => {
              this.props.makeGuess(this.props.letter)
              this.setState({ showLetter: false })
            }}>{this.props.letter}</button>
            :
            <p>X</p>
        }
      </div>
    )
  }
}