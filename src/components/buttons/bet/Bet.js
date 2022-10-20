import React, { useEffect, useState } from 'react';

import "./bet.scss";

function Bet() {
    const [bet, setBet] = useState(500);

    const decreaseBet = () => {
        setBet(bet - 2)
    }

    const increaseBet = () => {
        setBet(bet + 2)
    }

    return (
        <div className='bet'>
            <div className='set_bet'>
                <span onClick={() => decreaseBet()}>-</span>
            </div>
            
            <div className='current_bet'>{bet}</div>

            <div className='set_bet'>
                <span onClick={() => increaseBet()}>+</span>
            </div>
        </div>
    );
}

export default Bet;