import React, { useEffect } from 'react';
import * as PIXIScene from "../../helpers/SetUpPIXIScene";

function SpiningBall({canvas}) {

    useEffect(() => {
        console.log("ggg");
        PIXIScene.renderBall(canvas)
    }, [])

    return (
        <div>
            <div id={canvas}></div>
        </div>
    );
}

export default SpiningBall;