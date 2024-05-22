function specialNumbers(num) {

    for (let curNum = 1; curNum <= num; curNum++) {
        let strCurNum = String(curNum);
        let curSum = 0;

        for (let i = 0; i < strCurNum.length; i++) {
            let value = Number(strCurNum[i]);
            curSum += value;
        }
            (curSum === 5 || curSum === 7 || curSum === 11) ? console.log(`${curNum} -> True`) : console.log(`${curNum} -> False`);
    }
}

specialNumbers(15);
//specialNumbers(20);
