function pointsValidation(arr) {

    let num1 = [arr[0], arr[1]];
    let num2 = [arr[2], arr[3]];
    let zero = [0, 0];

    let distanceNum1ToZero = aToB(arr[0], 0, arr[1], 0);
    if (Number.isInteger(distanceNum1ToZero)) {
        console.log(`{${num1.join(', ')}} to {${zero.join(', ')}} is valid`);
    } else {
        console.log(`{${num1.join(', ')}} to {${zero.join(', ')}} is invalid`);
    }

    let distanceNum2ToZero = aToB(arr[2], 0, arr[3], 0);
    if (Number.isInteger(distanceNum2ToZero)) {
        console.log(`{${num2.join(', ')}} to {${zero.join(', ')}} is valid`);
    } else {
        console.log(`{${num2.join(', ')}} to {${zero.join(', ')}} is invalid`);
    }

    let distanceNum1Num2 = aToB(arr[0], arr[2], arr[1], arr[3]);
    if (Number.isInteger(distanceNum1Num2)) {
        console.log(`{${num1.join(', ')}} to {${num2.join(', ')}} is valid`);
    } else {
        console.log(`{${num1.join(', ')}} to {${num2.join(', ')}} is invalid`);
    }

    function aToB(a1, a2, b1, b2) {
        distance = Math.sqrt(Math.pow((a2 - a1), 2) + Math.pow((b2 - b1), 2));
        return distance;
    }

}

pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);
