import React, { Component } from 'react';
import './App.css';
import HangmanBoard from '../HangmanBoard/HangmanBoard';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dictionary: []
    }

    this.getARandomWord = this.getARandomWord.bind(this)
  }

  getARandomWord(arr) {
    const randomIndex = Math.floor(Math.random() * (arr.length + 1));
    return arr[randomIndex];
  }

  componentDidMount() {
    // way to get around cors-error
    fetch('https://cors-anywhere.herokuapp.com/http://app.linkedin-reach.io/words')
      .then(response => response.text())
      .then(wordList => {
        const wordsArr = JSON.stringify(wordList).split('\\n');
        const words = [];
        for (let i = 0; i < 10; i++) {
          const randomWord = this.getARandomWord(wordsArr)
          words.push(randomWord)
        }
        this.setState({ dictionary: words })
      })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title"> Hangman game made with React</h1>
        </header>
        <main>
          <HangmanBoard
            dictionary={this.state.dictionary}
          />
        </main>
      </div>
    );
  }
}

export default App;
