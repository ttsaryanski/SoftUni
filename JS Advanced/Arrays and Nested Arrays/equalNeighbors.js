function equalNeighbors(arr) {

    let matchCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr[i + 1][j]) {
                matchCount++;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            if (arr[i][j] === arr[i][j + 1]) {
                matchCount++;
            }
        }
    }

    //console.log(matchCount);
    return matchCount;
    
}

equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);

