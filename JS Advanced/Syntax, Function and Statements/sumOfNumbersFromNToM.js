function sumOfNumbersFromNToM(n, m) {

    let numN = Number(n);
    let numM = Number(m);

    let result = 0;

    for (let i = numN; i <= numM; i++) {
        result += i;
    }
    //console.log(result);
    return result;
    
}

sumOfNumbersFromNToM('1', '5');
sumOfNumbersFromNToM('-8', '20');
