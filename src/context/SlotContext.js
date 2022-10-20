import React, { createContext, useCallback, useEffect, useState } from "react";
import SlotData from "../mock/SlotData";



export const SlotContext = createContext();

export const SlotContextProvider = props => {

    const [firstPool, setFirstPool] = useState([]);
    const [secondPool, setSecondPool] = useState([]);
    const [thirdPool, setThirdPool] = useState([]);
    const [fourthPool, setFourthPool] = useState([]);

    const init = (firstInit = true, classValue) => {
        const doors = document.querySelectorAll(`.${classValue}`);

        for (const door of doors) {
      
            const boxes = door.querySelector('.boxes');
            const boxesClone = boxes.cloneNode(false);

            const playersData = [];

            for(let player of SlotData) {
                playersData.push(player);
            }

            const pool = [];
            pool.push(...shuffle(playersData));
            console.log(pool);

            if(!firstInit && classValue === "door_one") {
                console.log("usao");
                console.log(pool[0]);
                setFirstPool(firstPool => [...firstPool, pool[0]]);
            }else if(!firstInit && classValue === "door_two") {
                console.log("drugi");
                console.log(pool[0]);
                setSecondPool(secondPool => [...secondPool, pool[0]]);
            }else if(!firstInit && classValue === "door_three") {
                console.log("treci");
                console.log(pool[0]);
                setThirdPool(thirdPool => [...thirdPool, pool[0]]);
            }else if(!firstInit && classValue === "door_four") {
                console.log("cetvrti");
                console.log(pool[0]);
                setFourthPool(fourthPool => [...fourthPool, pool[0]]);
            }
      
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

        const doors = document.querySelectorAll(`.${classValue}`);

        init(false, classValue);
        
        for (const door of doors) {
          const boxes = door.querySelector('.boxes');
          const duration = parseInt(boxes.style.transitionDuration);
          boxes.style.transform = 'translateY(0)';
          await new Promise((resolve) => setTimeout(resolve, duration * 100));
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

    useEffect(() => {
        if(firstPool.length == 0 || secondPool.length == 0  || thirdPool.length == 0  || fourthPool.length == 0 ) return;

        console.log(firstPool, secondPool, thirdPool, fourthPool);
        checkIfWin()

    }, [fourthPool])

    const checkIfWin = () => {
        console.log("check if win");

        let winOne = []
        firstPool.forEach((player, index) => {
            if(player.id === secondPool[index].id) winOne.push(player);

        }) 

        // if(winCombination.length > 0) {
        //     console.log(winCombination);
        // }

        setFirstPool([]);
        setSecondPool([]);
        setThirdPool([]);
        setFourthPool([]);
        
    }


    const slotContextValue =  { 
        init, spin, shuffle
    }
    

    return (
        <SlotContext.Provider value={slotContextValue}>
            {props.children}
        </SlotContext.Provider>
    )
}