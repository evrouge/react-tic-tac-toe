import React from 'react';
import './ResetButton.css'

export const ResetButton = ({ resetBoard }) => {
    return (
        <div className='reset'>
            <button className='button' onClick={resetBoard}>Reset</button>
        </div>
    )
}
