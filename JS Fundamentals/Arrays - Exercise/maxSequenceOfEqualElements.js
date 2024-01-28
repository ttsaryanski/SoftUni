function maxSequenceOfEqualElements(array) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        let curNum = array[i];
        let curArr = [curNum];

        for (let j = i + 1; j < array.length; j++) {
            let nextNum = array[j];
            if (nextNum === curNum) {
                curArr.push(nextNum);
            } else {
                break;
            }
        }
        if (curArr.length > newArr.length) {
            newArr = curArr;
        }
    }

    console.log(newArr.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
