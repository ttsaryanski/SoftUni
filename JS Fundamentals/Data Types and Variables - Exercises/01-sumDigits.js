function sumDigits(num) {

    let sum = 0;
    let strNum = num.toString();

    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);
    }
    console.log(sum);
    
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
