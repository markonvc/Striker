import React from 'react';
import { SlotContext } from '../../context/SlotContext';

import Slot from '../slot/Slot';

import "./playArea.scss";

function PlayArea() {

    return (
        <div className='spin_area_container'>
            <Slot classValue="door_one"/>
            <Slot classValue="door_two"/> 
            <Slot classValue="door_three"/>
            <Slot classValue="door_four"/>
        </div>
    );
}

export default PlayArea;