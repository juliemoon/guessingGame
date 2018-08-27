import React from 'react';

const TrackGuess = (props) => {
  // console.log('props inside of TrackGuess>>>>>>', props)
  return (
    <div>
      {
        props.countGuess < 6 ?
          <div>
            {
              props.incorrectGuesses && props.incorrectGuesses.map((letter, i) => {
                return <p key={letter}> your incorrectly guessed: {letter}</p>
              })
            }
          </div> :
        <p>out of guesses! Here is the secret word: {props.secretWord}</p>
      }

    </div>
  )
}

export default TrackGuess;