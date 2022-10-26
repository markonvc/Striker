import React from 'react';

import Sound from '../buttons/sound/Sound';
import Bet from '../buttons/bet/Bet';
import Credit from '../credit/Credit';
import MaxBet from '../buttons/maxBet/MaxBet';
import SpinButton from '../buttons/spinButton/SpinButton';

import "./creditArea.scss";

function CreditArea() {
    return (
        <div className='credit_area'>
            <div style={{display: "flex"}}>
                <Sound/>   
                <Bet/>
            </div>

            <Credit/>
            
            <div style={{display: "flex"}}>
                <MaxBet/>
                <SpinButton/>
            </div>
        </div>
    );
}

export default CreditArea;