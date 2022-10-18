import React, { useContext } from 'react';
import { SlotContext } from '../../../context/SlotContext';

function SpinButton({props}) {
    const {spin} = useContext(SlotContext)

    return (
        <div>
            <button onClick={() => spin()} >spin</button>    
        </div>
    );
}

export default SpinButton;