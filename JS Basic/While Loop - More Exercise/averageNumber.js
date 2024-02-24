function averageNumber(input) {

    let numCount = Number(input[0]);
    let sum = 0;
    let count = 0;

    let i = 1;
    let curNum = Number(input[i]);
    while (numCount > 0) {
        sum += curNum;
        numCount--;
        count++;
        i++;
        curNum = Number(input[i]);
    }
    console.log((sum / count).toFixed(2));
    
}

averageNumber([4, 3, 2, 4, 2]);
averageNumber([2, 6, 4]);
averageNumber([3, 82, 43, 22]);
averageNumber([4, 95, 23, 76, 23]);
