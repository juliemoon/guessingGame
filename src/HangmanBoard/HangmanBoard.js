import React, { Component } from 'react';
import './HangmanBoard.css';
import alphabet from '../Utils/alphabet';
import Letter from '../Letter/Letter';
import TrackGuess from '../TrackGuess/TrackGuess';

export default class HangmanBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secretWord: '',
      countGuess: 0,
      incorrectGuesses: []
    }

    this.getARandomWord = this.getARandomWord.bind(this)
    this.makeGuess = this.makeGuess.bind(this)
  }

  getARandomWord(arr) {
    const randomIndex = Math.floor(Math.random() * (arr.length + 1));
    return arr[randomIndex];
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dictionary.length < this.props.dictionary.length) {
      this.setState({
        secretWord: this.getARandomWord(this.props.dictionary)
      })
    }
  }

  makeGuess(letter) {
    if (this.state.secretword && this.state.secretWord.includes(letter.toLowerCase())) {
      return true
    }
    this.setState({
      incorrectGuesses: [...this.state.incorrectGuesses, letter],
      countGuess: this.state.countGuess + 1
    })
    return false
  }

  render() {
    return (
      <div>
        <p>Tracking incorrect guesses:</p>
        <TrackGuess
          incorrectGuesses={this.state.incorrectGuesses}
          countGuess={this.state.countGuess}
          secretWord={this.state.secretWord}
        />

        <div>
          {
            this.state.secretWord === '' ?
              <p>Retrieving word</p> :
              <div>
                {
                  this.state.secretWord && this.state.secretWord.split('').map((letter, i) => {
                    return (
                      <div className="secretWordContainer">
                      <span key={letter + i} className="hide">{letter}</span>
                      </div>
                    )
                  })
                }
              </div>
          }
        </div>
        {/* mapping over to create letter component */}
        <div className="alphabet_container">
          {
            alphabet.map((letter, i) => {
              return <Letter
                key={i}
                letter={letter}
                makeGuess={this.makeGuess} />
            })
          }
        </div>
      </div>
    )
  }
}