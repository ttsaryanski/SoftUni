function sortingNumbers(array) {

    array = array.sort((a, b) => a - b);

    let result= [];

    while (array.length !== 0) {
        result.push(array.shift());
        result.push(array.pop());
    }

    return result;
    
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));