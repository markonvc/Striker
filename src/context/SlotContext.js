import React, { createContext, useEffect, useState } from "react";
import SlotData from "../mock/SlotData";



export const SlotContext = createContext();

export const SlotContextProvider = props => {

    const init = (firstInit = true, groups = 1, duration = 1, classValue) => {
        const doors = document.querySelectorAll(`.${classValue}`);

        for (const door of doors) {
            console.log(SlotData);
            if (firstInit) {
                console.log("prvi init");
                door.dataset.spinned = '0';
            } else if (door.dataset.spinned === '1') {
                console.log("spin = 1");
                return;
            }
      
            const boxes = door.querySelector('.boxes');
            const boxesClone = boxes.cloneNode(false);
            // const pool = ['5', "6", "7", "8", "9"]

            const playersData = [];

            for(let player of SlotData) {
                playersData.push(player);
            }

            const pool = [];

            pool.push(...shuffle(playersData));

      
            if (!firstInit) {
                console.log("nije prvi init");
                const arr = [];
                for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
                arr.push(...pool);
                }

                console.log(arr);
                pool.push(...shuffle(arr));
        
                boxesClone.addEventListener(
                'transitionstart',
                function () {
                    door.dataset.spinned = '1';
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
      
            for (let i = pool.length - 1; i >= 0; i--) {
                console.log("pool length > 0");
                const box = document.createElement('div');
                // console.log("1");
                box.classList.add('box');
                box.style.width = door.clientWidth + 'px';
                box.style.height = door.clientHeight + 'px';
                // console.log("2");
                // const playerImage = document.createElement('img')
                // playerImage.setAttribute('class', "playerImage")
                // playerImage.setAttribute('src', pool[i].image);
                // box.appendChild(playerImage); 
                box.style.backgroundImage = `url(${pool[i].image})`
                boxesClone.appendChild(box);
                // console.log("3");
            }
            boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
            boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
            console.log(boxesClone.style.transform);
            door.replaceChild(boxesClone, boxes);
        }
    }

    const spin = async() => {
        const doors = document.querySelectorAll('.door_one');

        init(false, 1, 2, "door_one");
        
        for (const door of doors) {
          const boxes = door.querySelector('.boxes');
          const duration = parseInt(boxes.style.transitionDuration);
          boxes.style.transform = 'translateY(0)';
          await new Promise((resolve) => setTimeout(resolve, duration * 100));
        }
      }

    const shuffle = ([...arr]) => {
        // console.log(arr);

        let m = arr.length;

        while (m) {
          const i = Math.floor(Math.random() * m--);
          [arr[m], arr[i]] = [arr[i], arr[m]];
        }

        return arr;
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