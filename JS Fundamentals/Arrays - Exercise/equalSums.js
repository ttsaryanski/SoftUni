function equalSums(array) {
    let sum = 0;
    let isEqual = true;

    if (array.length > 2) {
        for (let i = 0; i < array.length; i++) {
            let leftSum = 0;
            let rightSum = 0;

            for (let j = 0; j < i; j++) {
                let leftNum = array[j];
                leftSum += leftNum;
            }

            for (let k = i + 1; k < array.length; k++) {
                let rightNum = array[k];
                rightSum += rightNum;
            }

            if (leftSum === rightSum) {
                isEqual = true;
                console.log(i);
                break;
            } else {
                isEqual = false;
            }
        }
        if (isEqual === false) {
            console.log("no");
        }
    } else if (array.length === 2) {
        console.log("no");
    }

    if (array.length === 1) {
        sum = 0;
        console.log(sum);
    }
}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
