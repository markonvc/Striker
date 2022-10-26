import React, { useEffect } from 'react';
import * as PIXIScene from "../../helpers/SetUpPIXIScene";

import "./spinnigBall.scss"


function SpiningBall({canvas}) {

    useEffect(() => {
        PIXIScene.renderBall(canvas)
    }, [])

    return (
        <div>
            <div id={canvas}></div>
        </div>
    );
}

export default SpiningBall;