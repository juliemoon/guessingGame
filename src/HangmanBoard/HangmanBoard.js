import React, { Component } from 'react';

export default class HangmanBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secretWord: ''
    }

    this.getWord = this.getWord.bind(this)
  }

  getWord (arr){
    debugger;
    const randomIndex = Math.floor(Math.random() * (arr.length + 1));
    return arr[randomIndex];
  }

  componentDidMount() {
    debugger;
    const words = this.props.words;
    const randomWord = this.getWord(words)
    console.log('inside of componentDidMount- hangman: ', words)
    this.setState({
      secretWord: randomWord
    })
  }

  render() {
    debugger;
    return (
      <div>
        <p>inside of HangmanBoard:</p>
        <p>random word: {this.state.secretWord}</p>
        {/* {words.map((word, i) => {
          return <p key={i}>{i+1}: {word}</p>
        })} */}
      </div>
    )
  }
}