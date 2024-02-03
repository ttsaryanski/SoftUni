function addAndSubtract(num1, num2, num3) {

    let curNum = sumNum1Num2(num1, num2);
    let finalNum = subtractNums(curNum, num3)
    console.log(finalNum);

    function sumNum1Num2(a, b) {
        return a + b;
    }

    function subtractNums(ab, c) {
        return ab - c;
    }

}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
