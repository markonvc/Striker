const removeBlink = () => {
    let doorsOne = document.querySelectorAll(".door_one");
    for(let door of doorsOne) {
        let box = door.querySelector(".box");
        box.classList.remove("boxBlink");
    }

    let doorsTwo = document.querySelectorAll(".door_two");
    for(let door of doorsTwo) {
        let box = door.querySelector(".box");
        box.classList.remove("boxBlink");
    }

    let doorsThree = document.querySelectorAll(".door_three");
    for(let door of doorsThree) {
        let box = door.querySelector(".box");
        box.classList.remove("boxBlink");
    }

    let doorsFour = document.querySelectorAll(".door_four");
    for(let door of doorsFour) {
        let box = door.querySelector(".box");
        box.classList.remove("boxBlink");
    }
}

export default removeBlink