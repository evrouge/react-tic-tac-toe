//imports
import React from 'react'
import { Box } from './Box.js'
import './Board.css'
//============================
//============================
export const Board = ({ board, onClick }) => {
    return (
        <div className='board'>
            {board.map((value, idx) => {
                //value === null && makes it so user can't change the value again after clicked
                return <Box value={value} onClick={() => value === null && onClick(idx)} />
            })}
        </div>
    )
}
