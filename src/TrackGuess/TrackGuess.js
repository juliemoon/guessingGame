import React from 'react';
import './TrackGuess.css';

const TrackGuess = (props) => {
  return (
    <div id="trackGuess">
      <p id="guesses"><span id="thinkingFace" role="img" aria-label="thinking-face">🤔</span>&nbsp;{6 - props.countGuess} guesses left </p>
      
      {
        (props.countGuess < 6  && props.countGuess > -1) ?
          <p id="incorrectGuesses">
            <span id="srunchedFace" role="img" aria-label="scrunched-face">😣</span>&nbsp;incorrect guesses: <span>&nbsp;{props.incorrectGuesses}&nbsp;</span>
          </p> 
          : 
          <p id="secretWord">
            <span className="finger" role="img" aria-label="point-right-finger">👉</span>secret word: {props.secretWord}<span className="finger" role="img" aria-label="point-right-left">👈</span>
          </p>
      }
      
    </div>
  )
}

export default TrackGuess;