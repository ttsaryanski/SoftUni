function processOddPositions(arr) {

    return arr.filter((a, i) => i % 2 !== 0)
            .map(a => a * 2)
            .reverse()
            .join(' ');
    
}

console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));