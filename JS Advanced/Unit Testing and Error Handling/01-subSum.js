function subSum(arr, startIdx, endIdx) {

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (startIdx < 0) {
        startIdx = 0;
    }

    if (endIdx > arr.length - 1) {
        endIdx = arr.length - 1;
    }

    let sum = arr.map(Number)
             .slice(startIdx, endIdx + 1)
             .reduce((acc, cur) => acc + cur, 0);
    
    return sum;

    
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);
