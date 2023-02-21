//imports
import React, { useState } from 'react';
import './App.css';
import { Board } from './components/Board.js'
//=================================================
//=================================================
function App() {
  // win conditions
  const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // hooks
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  // const board = ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']
  //=============================================================
  //===================== FUNCTIONS =============================
  // x & o function
  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? 'X' : 'O';
      } else {
        return value;
      }
    })
    checkWinner(updatedBoard);
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  }

  // function for checking for the winning condition
  const checkWinner = (board) => {
    for (let i = 0; i < win_conditions.length; i++) {
      const [x, y, z] = win_conditions[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x])
        return board[x];
      }
    }
  }

  //=================================================
  //=================================================
  return (
    <div className="App">
      <Board board={board} onClick={handleBoxClick} />
    </div>

  );
}

export default App;
