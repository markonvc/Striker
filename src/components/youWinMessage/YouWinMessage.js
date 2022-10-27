import React, { useContext, useState } from 'react';
import { SlotContext } from '../../context/SlotContext';

import "./youWinMessage.scss";

function YouWinMessage() {
    const { youWinMessage } = useContext(SlotContext);


    return (
       <div className='you_win_container'>
            {youWinMessage && <p className='win_message'>
                Win!
            </p>}
        </div>
        
    );
}

export default YouWinMessage;