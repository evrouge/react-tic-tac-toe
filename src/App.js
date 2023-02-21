//imports
import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board.js'
//=================================================
//=================================================
function App() {
  // hooks
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  // const board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  //=============================================================
  //=============================================================
  // functions
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? 'X' : 'O';
      } else {
        return value;
      }
    })
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }


  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick} />
    </div>

  );
}

export default App;
