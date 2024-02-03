function perfectNumber(num) {

    let aliquotSum = curSum(num);
    if (aliquotSum === num) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }

    function curSum(params) {
        let curSum = 0;
        for (let i = 1; i < params; i++) {
            let curNum = i;
            if (params % curNum === 0) {
                curSum += curNum;
            }
        }
        return curSum;
    }

}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
