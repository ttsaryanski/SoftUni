function numberModification(num) {

    let isValid = false;
    while (isValid === false) {
        let sumCheck = curSum(num);
        if (sumCheck / String(num).length > 5) {
            isValid = true;
            break;
        } else {
            let newNumArr = [num];
            newNumArr.push(9);
            num = newNumArr.join("");
            isValid = false;
        }
    }

    if (isValid) {
        console.log(num);
    }

    function curSum(number) {
        let strNumber = String(number);
        let curNum = 0;
        let curSum = 0;
        for (let i = 0; i < strNumber.length; i++) {
            curNum = Number(strNumber[i]);
            curSum += curNum;
        }
        return curSum;
    }
}

numberModification(101);
numberModification(5835);
