function diagonalAttack(array) {

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].split(' ').map(Number);
    }

    let sum1 = 0;
    let sum2 = 0;
    let mStart = 0
    let mEnd = array[0].length - 1;

    for (let n = 0; n < array[mStart].length; n++) {
        sum1 += array[mStart][n];
        if (mStart < array[mStart].length - 1) {
            mStart++;
        } else {
            break;
        }
    }

    for (let n = 0; n < array[mEnd].length; n++) {
        sum2 += array[mEnd][n];
        if (mEnd > 0) {
            mEnd--;
        } else {
            break;
        }
    }
    
    if (sum1 !== sum2) {
        for (let row of array) {
            console.log(row.join(' '));
        }
    } else {
        
        let startX = 0;
        let startY = 0;
        let endX = array.length - 1;

        for (let m = 0; m < array.length; m++) {
            for (let n = 0; n < endX; n++) {
                if (m === startX && n === startY) {
                    continue;
                } else {
                    array[m][n] = sum1;
                }
            }
            if (startX < array.length - 1) {
                startX++;
                startY++;
                endX--;
            } else {
                break;
            }
        }

        for (let m = array.length - 1; m >= 0; m--) {
            for (let n = array[m].length - 1; n > endX; n--) {
                if (m === startX && n === startY) {
                    continue;
                } else {
                    array[m][n] = sum1;
                }
            }
            if (startX !== 0) {
                startX--;
                startY--;
                endX++;
            } else {
                break;
            }
        }

        for (let row of array) {
            console.log(row.join(' '));
        }
    }
    
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);
