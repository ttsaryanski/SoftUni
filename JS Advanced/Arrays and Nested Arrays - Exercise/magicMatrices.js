function magicMatrices(arr) {

    let isValid = true;

    for (let i = 0; i < arr.length; i++) {
        let rowSum = 0;
        const row = arr[i];
        for (let j = 0; j < row.length; j++) {
            rowSum += row[j];
        }
        for (let col = 0; col < arr.length; col++) {
            let colSum = 0;
            for (let row = 0; row < arr.length; row++) {
                colSum += arr[row][col];
            }
            if (colSum !== rowSum) {
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            break;
        }
    }
    console.log(isValid);
    
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]);
