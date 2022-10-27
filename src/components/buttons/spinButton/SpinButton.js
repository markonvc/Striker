import React, { useContext } from 'react';
import { SlotContext } from '../../../context/SlotContext';

import "./spinButton.scss";

function SpinButton({props}) {
    const {spin} = useContext(SlotContext);

    const spinTheCards = async() => {
        let doors = ["door_one", "door_two", "door_three", "door_four"]
        for(let i = 0; i < doors.length; i++) {
            spin(doors[i]);
            await new Promise((resolve) => setTimeout(resolve, 800));
        }
       
    }

    return (
        <div>
            <button className='spin' onClick={() => spinTheCards()} >spin</button>    
        </div>
    );
}

export default SpinButton;