function oddEvenPosition(input) {
    let numberCount = Number(input[0]);
    let evenNumMin = Number.MAX_SAFE_INTEGER;
    let evenNumMax = Number.MIN_SAFE_INTEGER;
    let oddNumMin = Number.MAX_SAFE_INTEGER;
    let oddNumMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let oddSum = 0;

    if (numberCount > 1) {
        for (let i = 1; i < input.length; i++) {
            let num = Number(input[i]);
            if (i % 2 === 0) {
                evenSum += num;
                if (num > evenNumMax) {
                    evenNumMax = num;
                } 
                if (num < evenNumMin) {
                    evenNumMin = num;
                }
            } else {
                oddSum += num;
                if (num > oddNumMax) {
                    oddNumMax = num;
                } 
                if (num < oddNumMin) {
                    oddNumMin = num;
                }
            }
        }
        console.log(`OddSum=${oddSum.toFixed(2)},`);
        console.log(`OddMin=${oddNumMin.toFixed(2)},`);
        console.log(`OddMax=${oddNumMax.toFixed(2)},`);
        console.log(`EvenSum=${evenSum.toFixed(2)},`);
        console.log(`EvenMin=${evenNumMin.toFixed(2)},`);
        console.log(`EvenMax=${evenNumMax.toFixed(2)}`);
    } else if (numberCount === 1) {
        let num = Number(input[1]);
        if (num % 2 === 0) {
            console.log(`OddSum=0.00,`);
            console.log(`OddMin=No,`);
            console.log(`OddMax=No,`);
            console.log(`EvenSum=${num.toFixed(2)},`);
            console.log(`EvenMin=${num.toFixed(2)},`);
            console.log(`EvenMax=${num.toFixed(2)}`);
        } else {
            console.log(`OddSum=${num.toFixed(2)},`);
            console.log(`OddMin=${num.toFixed(2)},`);
            console.log(`OddMax=${num.toFixed(2)},`);
            console.log(`EvenSum=0.00,`);
            console.log(`EvenMin=No,`);
            console.log(`EvenMax=No`);
        }
    } else {
        console.log(`OddSum=0.00,`);
        console.log(`OddMin=No,`);
        console.log(`OddMax=No,`);
        console.log(`EvenSum=0.00,`);
        console.log(`EvenMin=No,`);
        console.log(`EvenMax=No`);
    }
}

// oddEvenPosition(["6",
// "2",
// "3",
// "5",
// "4",
// "2",
// "1"]);

// oddEvenPosition(["5",
// "3",
// "-2",
// "8",
// "11",
// "-3"]);

// oddEvenPosition(["2",
// "1.5",
// "-2.5"]);

// oddEvenPosition(["4",
// "1.5",
// "1.75",
// "1.5",
// "1.75"]);

// oddEvenPosition(["1",
// "1"]);

// oddEvenPosition(["1",
// "-5"]);

// oddEvenPosition(["0"]);

oddEvenPosition(["3",
"-1",
"-2",
"-3"]);