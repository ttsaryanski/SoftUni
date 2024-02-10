function sorting(arr) {

    arr = arr.sort((a, b) => a - b);
    let newArr = [];
    
    while (arr.length > 0) {
        let bigNum = arr.pop();
        let smallNum = arr.shift();

        newArr.push(bigNum);

        if (arr.length >= 0) {
            newArr.push(smallNum);
        }
    }

    console.log(newArr.join(' '));
    
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
