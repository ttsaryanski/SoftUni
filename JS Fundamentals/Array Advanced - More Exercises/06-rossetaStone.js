function rossetaStone(array) {

    let tempateRow = Number(array.shift());
    let counter = tempateRow
    let template = [];
    
    while (counter !== 0) {
        let tmp = array.shift().split(' ').map(Number);
        template.push(tmp);
        counter--;
    }
    let templateCol = template[0].length;

    let matrix = [];
    for (let iterator of array) {
        let tmp = iterator.split(' ').map(Number);
        matrix.push(tmp);
    }
    let final = matrix.slice(0);
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            final[row][col] += template[row % tempateRow][col % templateCol];
        }
    }

    let finalText = [];
    for (let m = 0; m < final.length; m++) {
        for (let n = 0; n < final[m].length; n++) {
            let curNum = final[m][n] % 27;
            if (curNum !== 0) {
                let tmp = String.fromCharCode(curNum + 64);
                finalText.push(tmp);
            } else {
                let tmp = ' ';
                finalText.push(tmp);
            }
        }
    }
    console.log(finalText.join(''));
    
}

rossetaStone([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
]);
rossetaStone([
    '2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22'
]);
rossetaStone([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14',
]);
