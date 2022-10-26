import React, { useContext } from 'react';

import { SlotContext } from '../../../context/SlotContext';

import "./bet.scss";

function Bet() {
    const { bet, setBet, credit } = useContext(SlotContext);

    const decreaseBet = () => {
        if(bet > 1 ) setBet(bet - 1); 

    }

    const increaseBet = () => {
        if( bet < 50 && bet < credit) setBet(bet + 1);

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