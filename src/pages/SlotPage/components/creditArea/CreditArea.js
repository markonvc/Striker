import React from 'react';

import Sound from '../../../../components/buttons/sound/Sound';
import Bet from '../../../../components/buttons/bet/Bet';
import Credit from '../../../../components/credit/Credit';
import MaxBet from '../../../../components/buttons/maxBet/MaxBet';
import SpinButton from '../../../../components/buttons/spinButton/SpinButton';

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