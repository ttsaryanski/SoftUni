function asciiSumator(arr) {

    let sum = 0;
    let startNum = arr[0].charCodeAt();
    let endNum = arr[1].charCodeAt();
    if (startNum > endNum) {
        let tmp = startNum;
        startNum = endNum;
        endNum = tmp;
    }
    let strArr = arr[2].split('').map(n => n.charCodeAt());
    for (let num of strArr) {
        if (num > startNum && num < endNum) {
            sum += num;
        }
    }
    console.log(sum);

}

asciiSumator(
    ['.',
    '@',
    'dsg12gr5653feee5']
);
asciiSumator(
    ['?',
    'E',
    '@ABCEF']
);
asciiSumator(
    ['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
);
