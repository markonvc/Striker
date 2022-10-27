import React, { useContext, useEffect, useRef } from 'react';
import { SlotContext } from '../../../context/SlotContext';

import "./sound.scss";

function Sound() {
    const {sound, setSound, winSound, setSpinSound, spinSound } = useContext(SlotContext);
    const music = useRef();
    const youWinSoundElement = useRef();
    const spinSoundElement = useRef();

    useEffect(() => {
        if(winSound && sound) {
            youWinSoundElement.current.play();
        }
    }, [winSound])

    useEffect(() => {
        if(sound) {
            music.current.play();
            music.current.volume = 0.4
        }

    }, [sound])

    useEffect(() => {
        if(spinSound && sound) {
            spinSoundElement.current.play();
        }

        setSpinSound(false);
    }, [spinSound])

    const trigerSound = () => {


        if(sound) {
            music.current.pause()
            setSound(false);
            
        }else if (!sound) {
            music.current.play();
            setSound(true);
            
        }
    }

    return (
        <div>
            <button className='soundButton' onClick={() => trigerSound()}><img src={sound ? "images/soundOff.png" : "images/soundOn.png"}></img></button>
            <audio id="audio"  autoPlay loop  src="music.mp3" ref={music}></audio>
            <audio id="audio"  src="win.aac" ref={youWinSoundElement}></audio>
            <audio id="audio"  src="spin.aac" ref={spinSoundElement}></audio>
        </div>
    );
}

export default Sound;