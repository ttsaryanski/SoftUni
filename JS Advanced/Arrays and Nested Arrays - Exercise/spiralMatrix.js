function spiralMatrix(num1, num2) {

    let totalNum = num1 * num2;
    let numToStart = 1;

    let newArr = [];
    for (let k = 0; k < num1; k++) {
        let newRow = new Array(num2).fill(0);
            newArr.push(newRow);
        }

    let startX = 0;
    let endX = newArr.length - 1;
    let startY = 0;
    let endY = newArr.length - 1;
   
    while (numToStart <= totalNum) {
        for (let j = startY; j <= endY; j++) {
            let i = startX;
            if (newArr[i][j] === 0) {
                newArr[i][j] = numToStart;
                numToStart++;
            }
        }
        startX++;

        for (let i = startX; i <= endX; i++) {
            let j = endY;
            if (newArr[i][j] === 0) {
                newArr[i][j] = numToStart;
                numToStart++;
            }
        }
        endY--;

        for (let j = endY; j >= 0; j--) {
            let i = endX;
            if (newArr[i][j] === 0) {
                newArr[i][j] = numToStart;
                numToStart++;
            }
        }
        endX--;

        for (let i = endX; i >= startX; i--) {
            let j = startY;
            if (newArr[i][j] === 0) {
                newArr[i][j] = numToStart;
                numToStart++;
            }
        }
        startY++;  
        
    }
    
    for (let row of newArr) {
        console.log(row.join(' '));
    }
    
}

// spiralMatrix(5, 5);
// spiralMatrix(3, 3);
spiralMatrix(9, 9);
