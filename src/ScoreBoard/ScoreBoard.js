import React from 'react';

const ScoreBoard = (props) => {
  let winner = '';
  if(props.incorrectGuesses.length === 6){
    winner="computer"
  } else {
    winner="player"
  }

  return <h1>Winner: {winner}</h1>
 
}
export default ScoreBoard;