function magicSum(array, magicSum) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let nextNum = array[j];

            if (curNum + nextNum === magicSum) {
                newArr.push(curNum, nextNum);
                console.log(newArr.join(" "));
                newArr = [];
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
