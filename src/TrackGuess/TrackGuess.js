import React from 'react';

const TrackGuess = (props) => {
  return (
    <div>
      <p>Tracking incorrect guesses: you have {6 - props.countGuess} left </p>
      {
        props.countGuess < 6 ?
          <div>
            your incorrect guesses:
            <p>{props.incorrectGuesses}</p>

          </div> :
          <div>
            <p>out of guesses! Here is the secret word: {props.secretWord}</p>
            <p>here are the incorrect words you chose: {props.incorrectGuesses}</p>
          </div>
      }

    </div>
  )
}

export default TrackGuess;