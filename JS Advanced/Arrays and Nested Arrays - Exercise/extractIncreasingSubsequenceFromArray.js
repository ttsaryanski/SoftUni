function extractIncreasingSubsequenceFromArray(array) {

    let biggestNum = Number.MIN_SAFE_INTEGER;
    return array.reduce((arr, el) => {
        if (el >= biggestNum) {
            biggestNum = el;
            arr.push(el);
        }
        return arr;
    }, []);
    
}

console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]));