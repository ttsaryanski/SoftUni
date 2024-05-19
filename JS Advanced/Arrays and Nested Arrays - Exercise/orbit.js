function orbit(array) {

    let matrixRow = array[0];
    let matrixColumn = array[1];
    let startX = array[2];
    let startY = array[3];

    let arr = [];

    for (let i = 0; i < matrixRow; i++) {
        let row = new Array(matrixColumn).fill(0);
        arr.push(row);
    }

    for (let m = 0; m < arr.length; m++) {
        for (let n = 0; n < arr[m].length; n++) {
            arr[m][n] = Math.max(Math.abs(m - startX), Math.abs(n - startY)) + 1;
        }
    }
    
    arr.forEach(element => console.log(element.join(' ')));
    
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
