import React, { Component } from 'react';

export default class HangmanBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secretWord: ''
    }

    // this.getWord = this.getWord.bind(this)
    this.getARandomWord = this.getARandomWord.bind(this)
  }

  // getWord (arr){
  //   const randomIndex = Math.floor(Math.random() * (arr.length + 1));
  //   return arr[randomIndex];
  // }

  getARandomWord(arr){
    const randomIndex = Math.floor(Math.random() * (arr.length+1));
    return arr[randomIndex];
  }

componentDidUpdate(prevProps) {
  if(prevProps.words.length < this.props.words.length){
    this.setState({
      secretWord: this.getARandomWord(this.props.words)
    })
  }
}

  render() {
    return (
      <div>
        <p>inside of HangmanBoard:</p>
        <p>random word: {this.state.secretWord}</p>
      </div>
    )
  }
}