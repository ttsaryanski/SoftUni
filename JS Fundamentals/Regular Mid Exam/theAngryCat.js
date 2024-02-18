function theAngryCat(array, num, str) {

    let idx = Number(num);
    
    let leftSum = 0;
    let rightSum = 0;

    let leftArr = array.slice(0, idx);
    let rightArr = array.slice(idx + 1);
    
    for (let i = 0; i < leftArr.length; i++) {
        if (str === 'cheap') {
            if (leftArr[i] < array[idx]) {
                leftSum += leftArr[i];
            }
        } else if (str === 'expensive') {
            if (leftArr[i] >= array[idx]) {
                leftSum += leftArr[i];
            }
        }
    }

    for (let j = 0; j < rightArr.length; j++) {
        if (str === 'cheap') {
            if (rightArr[j] < array[idx]) {
                rightSum += rightArr[j];
            }
        } else if (str === 'expensive') {
            if (rightArr[j] >= array[idx]) {
                rightSum += rightArr[j];
            }
        }
    }
    let position = '';
    if (leftSum > rightSum) {
        position = 'Left';
        console.log(`${position} - ${leftSum}`);
    } else if (leftSum < rightSum) {
        position = 'Right'
        console.log(`${position} - ${rightSum}`);
    } else {
        position = 'Left';
        console.log(`${position} - ${leftSum}`);
    }
    
}

theAngryCat([1, 5, 1], 1, "cheap");
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");
