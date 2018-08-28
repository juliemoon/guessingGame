import React from 'react';

const TrackGuess = (props) => {
  // console.log('props inside of TrackGuess>>>>>>', props)
  return (
    <div>
      {
        props.countGuess < 6 ?
          <div>
            your incorrect guesses:
            <p>{props.incorrectGuesses}</p>
            {/* {
              props.incorrectGuesses && props.incorrectGuesses.map((letter, i) => {
                return <p key={letter}>{letter}</p>
              })
            } */}
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