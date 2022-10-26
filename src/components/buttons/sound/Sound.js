import React, { useContext, useEffect, useRef } from 'react';
import { SlotContext } from '../../../context/SlotContext';

import "./sound.scss";

function Sound() {
    const {sound, setSound, winSound, setWinSound} = useContext(SlotContext);
    const music = useRef();
    const youWinSound = useRef();

    const trigerSound = () => {

        if(sound) {
            setSound(false);
            music.current.pause()
            
        }else {
            setSound(true);
            music.current.play();
            music.current.volume = 0.4
        }
    }

    useEffect(() => {
        console.log(winSound);
        if(winSound && sound) {
            youWinSound.current.play();
            youWinSound.current.volume = 1
        }
    }, [winSound])

    return (
        <div>
            <button className='soundButton' onClick={() => trigerSound()}><img src={sound ? "images/soundOff.png" : "images/soundOn.png"}></img></button>
            <audio id="audio"  autoPlay loop  src="music.mp3" ref={music}></audio>
            <audio id="audio"  src="win.aac" ref={youWinSound}></audio>
        </div>
    );
}

export default Sound;