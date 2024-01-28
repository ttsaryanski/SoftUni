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
    
    // for (let j = 0; j < strSum.length; j++) {
    //     let result = strSum[j];
        
    //     if (result === '9') {
    //         isMagic = true;
    //     } else {
    //         isMagic = false;
    //     }
    // }
    
    // if (isMagic === false) {
    //     console.log(`${num} Amazing? False`);
    // } else {
    //     console.log(`${num} Amazing? True`);
    // }
}

// amazingNumbers(1233);
// amazingNumbers(999);
amazingNumbers(559);
