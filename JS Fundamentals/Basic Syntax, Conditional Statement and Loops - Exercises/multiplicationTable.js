function multiplicationTable(num) {
    let result = 0;

    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        result = num * multiplier;
        console.log(`${num} X ${multiplier} = ${result}`);
    }
    
}

multiplicationTable(5);
multiplicationTable(2);
