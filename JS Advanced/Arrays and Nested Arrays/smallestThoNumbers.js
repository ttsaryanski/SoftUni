function smallestThoNumbers(arr) {

    let result = arr.sort((a, b) => a - b).slice(0, 2);

    console.log(result.join(' '));
    
}

smallestThoNumbers([30, 15, 50, 5]);
smallestThoNumbers([3, 0, 10, 4, 7, 3]);
