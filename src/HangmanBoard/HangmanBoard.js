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
    this.gameEnds = this.gameEnds.bind(this)
  }

  getARandomWord(arr) {
    const randomIndex = Math.floor(Math.random() * (arr.length + 1));
    return arr[randomIndex];
  }

  // componentDidMount dictionary is undefined because render happens in order but not componentDidMount
  componentDidUpdate(prevProps) {
    if (!prevProps.secretWord && !prevProps.dictionary.length && this.props.dictionary.length) {
      this.setState({
        secretWord: this.getARandomWord(this.props.dictionary)
      })
    }
  }

  gameEnds() {
    const secretWordLetterSet = new Set(this.state.secretWord)
    const lengthOfMatchedLetters = this.state.matched.size
    const playerFoundAllLettersInSW = secretWordLetterSet.size === lengthOfMatchedLetters
    const theGameIsOver = this.state.countGuess === 6 || playerFoundAllLettersInSW
    return theGameIsOver
  }

  getScoreBoard() {
    const theGameHasEnded = this.gameEnds()

    if (theGameHasEnded) {
      return <ScoreBoard incorrectGuesses={this.state.incorrectGuesses} />
    } else {
      return null
    }
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
      this.setState({
        playerFoundAllLettersInSW: true
      })
    }
  }

  render() {
    const isTheGameOver = this.gameEnds()
    return (
      <div className="game_container">

        {
          (this.state.countGuess === 6 || this.state.playerFoundAllLettersInSW) ? this.getScoreBoard() : null
        }

        <TrackGuess
          incorrectGuesses={this.state.incorrectGuesses}
          countGuess={this.state.countGuess}
          secretWord={this.state.secretWord}
        />

        <div id="secretWord">
          {
            this.state.secretWord === '' ?
              <div className="loading">
                <p>Retrieving word</p>

                <div className="loader">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              :

              this.state.secretWord && this.state.secretWord.split('').map((letter, i) => {
                let letterToShow = letter
                if (!this.state.matched.has(letter)) {
                  letterToShow = '_'
                }
                return <Letter matched={this.state.matched} letter={letterToShow} key={i} />
              })
          }
        </div>

        {
          !isTheGameOver ?
            <div className="alphabet_buttons">
              {
                alphabet.map((letter, i) => {
                  return <Button
                    key={i}
                    letter={letter}
                    makeGuess={this.makeGuess}
                  />
                })
              }
            </div>
            :
            null  
        }
        
      </div>
    )
  }
}

