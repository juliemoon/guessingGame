import React, { Component } from 'react';
import './App.css';
import HangmanBoard from '../HangmanBoard/HangmanBoard';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import TrackGuess from '../TrackGuess/TrackGuess';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      words: [],
      guess: '',
      incorrectCount: 0,
      resetGame: false
    }
    
    this.getARandomWord = this.getARandomWord.bind(this)
  }

  getARandomWord(arr){
    const randomIndex = Math.floor(Math.random() * (arr.length+1));
    return arr[randomIndex];
  }

  componentDidMount() {
    // way to get around cors-error
    fetch('https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words')
    .then(response => response.text())
    .then( wordList => {
      const wordsArr = JSON.stringify(wordList).split('\\n');
      const words = [];
      for(let i = 0; i < 10; i++) {
        const randomWord = this.getARandomWord(wordsArr)
        words.push(randomWord)
      }
      this.setState({ words: words })
    })
  }

  render() {
    return (
      <div className="App">
        <ScoreBoard />
        <TrackGuess />
        <HangmanBoard words={this.state.words}/>
      </div>
    );
  }
}

export default App;
