function amazingNumbers(num) {

    let isMagic = true;
    let sum = 0;
    let strNum = String(num);

    for (let i = 0; i < strNum.length; i++) {
        let curNum = Number(strNum[i]);
        sum += curNum;
    }

    let strSum = String(sum);
    
    if (strSum.includes(9)) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
    
}

amazingNumbers(1233);
amazingNumbers(999);
amazingNumbers(559);
