function oddAndEvenSum(num) {

    let oddResult = oddSum(num);
    let evenResult = evenSum(num);

    console.log(`Odd sum = ${oddResult}, Even sum = ${evenResult}`);

    function oddSum(a) {
        let oddSum = 0;
        let str = String(a);
        for (let i = 0; i < str.length; i++) {
            let curNum = Number(str[i]);
            if (curNum % 2 !== 0) {
                oddSum += curNum;
            }
        }
        return oddSum;
    }

    function evenSum(a) {
        let evenSum = 0;
        let str = String(a);
        for (let i = 0; i < str.length; i++) {
            let curNum = Number(str[i]);
            if (curNum % 2 === 0) {
                evenSum += curNum;
            }
        }
        return evenSum;
    }

}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
