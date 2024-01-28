function sumOfTwoNumbers(input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);
    let count = 0;
    let inValidSum = false;

    for (let a = startInterval; a <= endInterval; a++) {
        for (let b = startInterval; b <= endInterval; b++) {
            let sum = a + b;
            count++;
            if (sum === magicNumber) {
                console.log(`Combination N:${count} (${a} + ${b} = ${magicNumber})`);
                inValidSum = true;
                break;
            }
        }
        if (inValidSum) {
            break;
        }
    }
    if (!inValidSum) {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }count
    
}

sumOfTwoNumbers(["1",
    "10",
    "5"]);

sumOfTwoNumbers(["23",
    "24",
    "20"]);

sumOfTwoNumbers(["88",
    "888",
    "1000"]);

sumOfTwoNumbers(["88",
    "888",
    "2000"]);