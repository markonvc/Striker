import React from 'react';
import { SlotContext } from '../../../../context/SlotContext';

import Slot from '../../../../components/slot/Slot';
import YouWinMessage from './youWinMessage/YouWinMessage';

import "./playArea.scss";

function PlayArea() {

    return (
        <React.Fragment>
            <YouWinMessage/>
            <div className='spin_area_container'>
                <Slot classValue="door_one"/>
                <Slot classValue="door_two"/> 
                <Slot classValue="door_three"/>
                <Slot classValue="door_four"/>
            </div>
        </React.Fragment>
    );
}

export default PlayArea;