function magicMatrices(arr) {
    let isMagic = true;

    for (let i = 0; i < arr.length; i++) { // rows, just access
        let columnSum = 0;
        let rowSum = 0;
        for (let j = 0; j < arr[i].length; j++) { // columns, just access
            columnSum += arr[i][j]; // suming the columns for the current row
        }
        for (let row = 0; row < arr.length; row++) {
            rowSum += arr[row][i]; // suming the rows for the current column
        }
        if (rowSum != columnSum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
]);
// magicMatrices([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1],
// ]);
// magicMatrices([
//     [1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0],
// ]);
