import React, { useContext, useEffect, useState } from 'react';
import { SlotContext } from '../../context/SlotContext';

import "./startGame.scss";

function StartGame() {
    const { credit } = useContext(SlotContext);
    const [startGame, setStartGame] = useState("start");

    useEffect(() => {
        if(credit < 1) {
            setStartGame("new game");
        }
    }, [credit])

    return (
        <div className=''>
            <button className='start_game'>{startGame}</button>
        </div>
    );
}

export default StartGame;