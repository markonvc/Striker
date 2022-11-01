import React, { createContext, useCallback, useEffect, useState } from "react";

import getAllBoxes from "../helpers/GetAllBoxes";
import removeBlink from "../helpers/RemoveBlink";
import checkIfPay from "../helpers/CheckIfPay";
import Data from "../mock/PlayerData";



export const SlotContext = createContext();

export const SlotContextProvider = props => {

    const [credit, setCredit] = useState();
    const [bet, setBet] = useState(2)
    const [sound, setSound] = useState(false);
    const [spinSound, setSpinSound] = useState(false);
    const [winSound, setWinSount] = useState(false);
    const [youWinMessage, setYouWinMessage] = useState(false);
    const [winningRate, setWinningRate] = useState();
    const [newGame, setNewGame] = useState(false);
    

    const init = (firstInit = true, classValue) => {
        const doors = document.querySelectorAll(`.${classValue}`);

        for (const door of doors) {
      
            const boxes = door.querySelector('.boxes');
            const boxesClone = boxes.cloneNode(false);

            const playersData = [];

            for(let player of Data) {
                playersData.push(player);
            }

            const pool = [];
            pool.push(...shuffle(playersData));

      
            if (!firstInit) {
                boxesClone.addEventListener(
                'transitionstart',
                function () {
                    this.querySelectorAll('.box').forEach((box) => {
                    box.style.filter = 'blur(1px)';
                    });
                },
                { once: true }
                );
        
                boxesClone.addEventListener(
                'transitionend',
                function () {
                    this.querySelectorAll('.box').forEach((box, index) => {
                    box.style.filter = 'blur(0)';
                    if (index > 0) this.removeChild(box);
                    });
                },
                { once: true }
                );
            }

      
            for (let i = 0; i < pool.length; i++) {
                const box = document.createElement('div');
                box.classList.add('box');
                box.setAttribute("id", pool[i].id);
                box.style.width = door.clientWidth + 'px';
                box.style.height = door.clientHeight + 'px';
                box.style.backgroundImage = `url(${pool[i].image})`
                boxesClone.appendChild(box);
            }

            boxesClone.style.transitionDuration = `${1}s`;
            boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
            door.replaceChild(boxesClone, boxes);
        }
    }

    const spin = async(classValue) => {
        if(credit >= bet) {
            setSpinSound(true);
            setCredit(credit - bet);
            setWinSount(false);
            setYouWinMessage(false);
            removeBlink();
    
            const doors = document.querySelectorAll(`.${classValue}`);
    
            init(false, classValue);
    
            
            for (const door of doors) {
              const boxes = door.querySelector('.boxes');
              const duration = parseInt(boxes.style.transitionDuration);
              boxes.style.transform = 'translateY(0)';
              await new Promise((resolve) => setTimeout(resolve, duration * 100));
            }
    
    
            if(classValue === "door_four") {
                getResult()
            }
          }
        }
       

    const shuffle = ([...arr]) => {
        let m = arr.length;

        while (m) {
          const i = Math.floor(Math.random() * m--);
          [arr[m], arr[i]] = [arr[i], arr[m]];
        }

        return arr;
    }


    const payOut = (rate) => {
        let winAmount = bet * (rate / 2);
        let finalAmount = Math.trunc(winAmount);

        setCredit(credit + finalAmount);
    }

    const getResult = () => {

        let sequenceResult = getAllBoxes();

        const rate = checkIfPay(sequenceResult);

        setWinningRate(rate)
        
    }

    useEffect(() => {
        if(winningRate > 0) {
            payOut(winningRate);
            setWinSount(true);
            setYouWinMessage(true);

        }else if (credit === 0) {
            setTimeout(() => {
                setNewGame(true);
            }, 2000)
        }
        
    }, [winningRate])


    const slotContextValue =  { 
        bet, credit, sound, winSound, 
        youWinMessage, newGame, spinSound,
        setBet, setCredit, setSound, setWinSount,
        setSpinSound, init, spin, shuffle, setYouWinMessage
    }
    

    return (
        <SlotContext.Provider value={slotContextValue}>
            {props.children}
        </SlotContext.Provider>
    )

}    
