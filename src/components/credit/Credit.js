import React, { useContext } from 'react';

import { SlotContext } from '../../context/SlotContext';

import "./credit.scss";

function Credit() {
    const { credit } = useContext(SlotContext);

    return (
        <div className='credit'>
            <span>{credit}</span>
        </div>
    );
}

export default Credit;