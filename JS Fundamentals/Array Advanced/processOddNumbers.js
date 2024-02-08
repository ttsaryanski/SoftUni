function processOddNumbers(array) {

    let oddArr = [];
    
    for (let i = 0; i < array.length; i++) {
        let curNum = 0;
        if (i % 2 !== 0) {
            curNum = array[i] * 2;
            oddArr.push(curNum)
        }
    }

    console.log(oddArr.reverse().join(' '));
    
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
