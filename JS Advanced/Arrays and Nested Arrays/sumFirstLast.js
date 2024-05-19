function sumFirstLast(arr) {

    let result = arr.map(Number);
    result = result.filter((a, idx) => idx == 0 || idx == result.length - 1);
    result = result.reduce((a, b) => a + b);
    
    return result;
     
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
