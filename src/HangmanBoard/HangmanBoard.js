import React, { Component } from 'react';
import './HangmanBoard.css';
import alphabet from '../Utils/alphabet';
import Button from '../Buttons/Button';
import TrackGuess from '../TrackGuess/TrackGuess';
import Letter from '../Letter/Letter';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

export default class HangmanBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secretWord: '',
      countGuess: 0,
      incorrectGuesses: [],
      matched: new Set(),
      playerFoundAllLettersInSW: false
    }

    this.getARandomWord = this.getARandomWord.bind(this)
    this.makeGuess = this.makeGuess.bind(this)
    this.getScoreBoard = this.getScoreBoard.bind(this)
    this.listener = this.listener.bind(this)
  }

  getARandomWord(arr) {
    const randomIndex = Math.floor(Math.random() * (arr.length + 1));
    return arr[randomIndex];
  }

  // componentDidMount dictionary is undefined because render happens in order but not componentDidMount

  componentDidUpdate(prevProps) {
    if (!prevProps.dictionary.length && this.props.dictionary.length) {
      this.setState({
        secretWord: this.getARandomWord(this.props.dictionary)
      })
    }
  }

  getScoreBoard() {
    const secretWordLetterSet = new Set(this.state.secretWord)
    const lengthOfMatchedLetters = this.state.matched.size
    const playerFoundAllLettersInSW = secretWordLetterSet.size === lengthOfMatchedLetters
    return (
      (this.state.countGuess === 6 || playerFoundAllLettersInSW) ? <ScoreBoard incorrectGuesses={this.state.incorrectGuesses} /> : null
    )
  }

  makeGuess(letter) {
    if (this.state.secretWord.includes(letter)) {
      this.setState({
        matched: this.state.matched.add(letter)
      })
      this.listener(this.state.matched.size)
    } else {
      this.setState({
        incorrectGuesses: [...this.state.incorrectGuesses, letter],
        countGuess: this.state.countGuess + 1
      })
    }
  }

  listener(size) {
    const secretWordLetterSet = new Set(this.state.secretWord)
    const lengthOfMatchedLetters = size
    if (secretWordLetterSet.size === lengthOfMatchedLetters) {
      this.setState({ playerFoundAllLettersInSW: true })
    }
  }

  render() {
    return (
      <div>
        {
          (this.state.countGuess === 6 || this.state.playerFoundAllLettersInSW) ? this.getScoreBoard() : null
        }
        {/* <p>Tracking incorrect guesses: you have {6 - this.state.countGuess} left </p> */}

        <TrackGuess
          incorrectGuesses={this.state.incorrectGuesses}
          countGuess={this.state.countGuess}
          secretWord={this.state.secretWord}
        />

        <div>
          {
            this.state.secretWord === '' ?
              <p>Retrieving word</p> :

              this.state.secretWord && this.state.secretWord.split('').map((letter, i) => {
                let letterToShow = letter
                if (!this.state.matched.has(letter)) {
                  letterToShow = '_'
                }
                return <Letter matched={this.state.matched} letter={letterToShow} key={i} />
              })
          }
        </div>

        <div className="alphabet_buttons">
          {
            alphabet.map((letter, i) => {
              return <Button
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

