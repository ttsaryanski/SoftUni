function diagonalSums(array) {

    let mainDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let i = 0; i < array.length; i++) {
        mainDiagonalSum += array[i][i];
    }

    for (let i = 0; i < array.length; i++) {
        secondDiagonalSum += array[(array.length - 1) - i][i]
    }

    console.log(`${mainDiagonalSum} ${secondDiagonalSum}`);

}

diagonalSums([
    [20, 40],
    [10, 60]
]);
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);
