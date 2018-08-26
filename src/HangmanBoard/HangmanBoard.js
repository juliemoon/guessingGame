import React, { Component } from 'react';

export default class HangmanBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secretWord: ''
    }

    this.getWord = this.getWord.bind(this)
    this.getARandomWord = this.getARandomWord.bind(this)
  }

  getWord (arr){
    const randomIndex = Math.floor(Math.random() * (arr.length + 1));
    return arr[randomIndex];
  }

  getARandomWord(arr){
    const randomIndex = Math.floor(Math.random() * (arr.length+1));
    return arr[randomIndex];
  }

componentDidMount() {
  fetch('http://app.linkedin-reach.io/words')
  .then(response => response.text())
  .then( wordList => {
    const wordsArr = JSON.stringify(wordList).split('\\n');
    const words = [];
    for(let i = 0; i < 10; i++) {
      const randomWord = this.getARandomWord(wordsArr)
      words.push(randomWord)
    }
    this.setState({
      secretWord: this.getWord(words)
    });
  })
}

  render() {
    debugger;
    return (
      <div>
        <p>inside of HangmanBoard:</p>
        <p>random word: {this.state.secretWord}</p>
      </div>
    )
  }
}