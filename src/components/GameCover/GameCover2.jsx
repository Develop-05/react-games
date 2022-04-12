import React from 'react';
import './GameCover2.css'

export const GameCover2 = ({ image = '' }) => {
    return (
        <div
            className="game-cover2"
            style={{ backgroundImage: `url(${image})` }}
      />
    )
}
