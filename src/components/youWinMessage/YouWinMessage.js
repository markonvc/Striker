import React, { useContext, useState } from 'react';
import { SlotContext } from '../../context/SlotContext';

import "./youWinMessage.scss";

function YouWinMessage() {
    const { youWinMessage } = useContext(SlotContext);

    console.log(youWinMessage);
    return (
       <div className='you_win'>
            <h1 style={{margin: "0", visibility: youWinMessage ? "visible" : "hidden"}}>
                You Win!
            </h1>
        </div>
        
    );
}

export default YouWinMessage;