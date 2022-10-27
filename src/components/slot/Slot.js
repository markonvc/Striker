import React, { useContext, useEffect } from 'react';
import { SlotContext } from '../../context/SlotContext';

import "./slot.scss"

function Slot({classValue}) {
    const { init } = useContext(SlotContext)
    

    useEffect(() => {
        init(undefined, classValue)

    },[])

    return (
        <div className="doors">
            <div className={classValue}>
                <div className="boxes">

                </div>
            </div>

            <div className={classValue}>
                <div className="boxes">

                </div>
            </div>

            <div className={classValue}>
                <div className="boxes">

                </div>
            </div>

            {/* <div className={classValue}>
                <div className="boxes">
                    
                </div>
            </div> */}
        </div>
    );
}

export default Slot;