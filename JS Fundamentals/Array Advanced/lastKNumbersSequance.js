function lastKNumbersSequance(num1, num2) {

    let resultArr = [1];

    for (let i = 1; i < num1; i++) {
        let sliceElement = Math.max(resultArr.length - num2, 0);
        let newArr = resultArr.slice(sliceElement);
        let sum = 0;
        for (let num of newArr) {
            sum += num;
        }
        resultArr.push(sum);
    }

    console.log(resultArr.join(' '));

}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);
