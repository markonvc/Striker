import React, { useContext, useEffect, useRef, useState } from 'react';
import { SlotContext } from '../../context/SlotContext';

import "./startGame.scss";

function StartGame() {
    const { setCredit, setBet, newGame, setSound } = useContext(SlotContext);
    const [lobbyButton, setLobbyButton] = useState("start game");
    const lobby = useRef();

    useEffect(() => {
        if(newGame) {
            setLobbyButton("new game");
            lobby.current.style.display = "flex";
        }
    }, [newGame])

    const startGame = () => {
        setSound(true);
        setCredit(500);
        setBet(2);
        lobby.current.style.display = "none";
    }

    return (
        <div className='lobby_page' ref={lobby}>
            <button className='start_game' onClick={() => startGame()}>{lobbyButton}</button>
        </div>
    );
}

export default StartGame;