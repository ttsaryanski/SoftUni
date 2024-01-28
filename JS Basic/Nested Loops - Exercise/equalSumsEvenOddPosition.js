function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let targetNum = 0;
    let targetNumPrint = "";
    

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let curNumString = String(curNum);
        let evenSum = 0;
        let oddSum = 0;
        
        for (let i = 0; i < curNumString.length; i++) {
            let num = Number(curNumString[i]);
            let position = i + 1;
            if (position % 2 === 0) {
                evenSum += num;
            } else {
                oddSum += num;
            }
            
        }
        if (evenSum === oddSum) {
            targetNum = curNum;
            targetNumPrint += targetNum + " ";
        }
    }
    console.log(targetNumPrint);
}

//equalSumsEvenOddPosition(["100000", "100050"]);
equalSumsEvenOddPosition(["123456", "124000"]);