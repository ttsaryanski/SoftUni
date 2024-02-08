function negativeOrPositiveNumbers(array) {

    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let curNum = Number(array[i]);
        if (curNum < 0) {
            newArr.unshift(curNum)
        } else if (curNum >= 0) {
            newArr.push(curNum);
        }
    }

    for (const num of newArr) {
        console.log(num);
    }
    
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);
