import WinCominations from "../mock/WinCominations"

const checkGoldenWin = (resultRow, goldenSequence) => {
    return resultRow.length === goldenSequence.length &&
    resultRow.every((v, i) => v.id == goldenSequence[i]);

}

const checkWin = (resultRow, combination) => {
    let match = 0;
    let boxId;

    for(let i = 0; i < resultRow.length; i++) {

        if(resultRow[i].id == 13 && 
        (combination.id === 1 || combination.id === 2)) return;

        if(resultRow[i].id == combination.id) {
            if(!boxId) boxId = resultRow[i].id  
            match++;
        } 
    }



    if ( boxId && match >= 2 && (boxId != 8 &&
        boxId != 9 && boxId != 11 )) {
            for(let box of resultRow) {
                if(box.id == boxId) {
                    box.classList.add("boxBlink")   
                } 
            }
    }else if (boxId && match >= 3 && (boxId == 8 ||
              boxId == 9 || boxId == 11)) {
            for(let box of resultRow) {
                if(box.id == boxId) {
                    box.classList.add("boxBlink")   
                } 
            }
            
        }



    if(match === 4) {
        return combination.rating + combination.rating
    }else if(match === 3) {
        return combination.rating
    }else if(match === 2 && (combination.id !== 8 && combination.id !== 9 && combination.id !== 11)) {
        return combination.rating / 2;
    }

    return 0;
}

const checkIfPay = (result) => {
    let winningRate = 0;

    for(let i = 0; i < result.length; i++) {
        let row = result[i];

        WinCominations.forEach(combination => {
            if(combination?.sequence && checkGoldenWin(row, combination.sequence)) {
                winningRate += combination.rating;
                for(let box of row) {
                    box.classList.add("boxBlink")
                } 

            }else if(combination?.id && (combination.line === "any" || combination.line === i)) {
                let hit = checkWin(row, combination)
                if(hit > 0) winningRate += hit
                
            }
        })
    }

    return winningRate;
    
}

export default checkIfPay 