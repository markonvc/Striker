import React from 'react';

import SpiningBall from "../../../../components/spiningBall/SpiningBall";

import "./gameTitle.scss"

function GameTitle() {

    return (
        <div className='title_container'>
            <div className='heading_container'><p className='heading'>striker</p></div>
            <SpiningBall canvas="canvasContainer"/>
        </div>
    );
}

export default GameTitle