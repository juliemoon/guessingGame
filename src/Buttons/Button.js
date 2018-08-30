import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props)

    this.state ={
      disable: false
    }
  }
  render() {
    return (
      <button disabled = {this.state.disable}
              onClick = {() => {
                this.props.makeGuess(this.props.letter.toLowerCase())
                this.setState({disable:!this.state.disable})
                } 
              }
      >
      {this.props.letter}
      </button>
    )
  }
}