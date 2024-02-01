function signCheck(num1, num2, num3) {

    function num1Num2Multiply(a, b) {
        return num1 * num2;
    }

    let curResult = num1Num2Multiply(num1, num2)
    let finalResult = curResult * num3;

    if (finalResult < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }

}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
