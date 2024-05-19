function lastKNumbersSequence(length, equalsElementsCount) {

    let resultArr = [1];

    while (resultArr.length < length) {
        let idxToSlice = Math.max(resultArr.length - equalsElementsCount, 0);
        let slicedArr = resultArr.slice(idxToSlice);
        let sum = slicedArr.reduce((a, b) => a + b);
        resultArr.push(sum);
    }

    return resultArr;
    
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));
