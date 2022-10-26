import React, { useContext } from 'react';

import { SlotContext } from '../../../context/SlotContext';

import "./maxBet.scss"

function MaxBet() {
    const { setBet, credit } = useContext(SlotContext);

    const setMax = () => {
        credit >= 50 && setBet(50);
    }

    return (
        <div>
            <button className='max_bet' onClick={() => setMax()}>max</button>
        </div>
    );
}

export default MaxBet;