import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = (props) => {
  let winner = '';
  if(props.incorrectGuesses.length === 6) {
    winner="COMPUTER"
  } else {
    winner="PLAYER"
  }

  return (
    <div id="winner">
      <p>
        <span role="img" aria-label="cool">😎</span> &nbsp; Winner: {winner}
      </p>
    </div>
  )
 
}
export default ScoreBoard;