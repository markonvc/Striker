const getAllBoxes = () => {
    let sequenceResult = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]


    let doorsOne = document.querySelectorAll(".door_one");
    let boxesOne = []

    for(let door of doorsOne) {
        let box = door.querySelector(".box");
        boxesOne.push(box)
    }


    let doorsTwo = document.querySelectorAll(".door_two");
    let boxesTwo = []
    for(let door of doorsTwo) {
        let box = door.querySelector(".box");
        boxesTwo.push(box)
    }


    let doorsThree = document.querySelectorAll(".door_three");
    let boxesThree = []
    for(let door of doorsThree) {
        let box = door.querySelector(".box");
        boxesThree.push(box)
    }


    let doorsFour = document.querySelectorAll(".door_four");
    let boxesFour = []
    for(let door of doorsFour) {
        let box = door.querySelector(".box");
        boxesFour.push(box)
    }

    
    let rowOne = [boxesOne[0], boxesTwo[0], boxesThree[0], boxesFour[0]]; 
    let rowTwo = [boxesOne[1], boxesTwo[1], boxesThree[1], boxesFour[1]];
    let rowThree = [boxesOne[2], boxesTwo[2], boxesThree[2], boxesFour[2]];  
    
    let result = [rowOne, rowTwo, rowThree];


    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result[i].length; j++) {
            sequenceResult[i][j] = result[i][j]
        }
    }

    return sequenceResult;

}

export default getAllBoxes