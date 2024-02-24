function dishwasher(input) {

    let bottleCount = Number(input[0]);
    let fullLiquid = bottleCount * 750;

    let i = 1;
    let command = input[i];
    let counter = 1;
    let clearPlates = 0;
    let clearPot = 0;
    while (command !== 'End') {
        if (counter % 3 === 0) {
            clearPot += Number(input[i]);
            fullLiquid -= Number(input[i]) * 15;
            if (fullLiquid < 0) {
                console.log(`Not enough detergent, ${Math.abs(fullLiquid)} ml. more necessary!`);
                break;
            }
        } else {
            clearPlates += Number(input[i]);
            fullLiquid -= Number(input[i]) * 5;
            if (fullLiquid < 0) {
                console.log(`Not enough detergent, ${Math.abs(fullLiquid)} ml. more necessary!`);
                break;
            }
        }
        counter++;
        i++;
        command = input[i];
    }
    if (command === 'End' || fullLiquid >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${clearPlates} dishes and ${clearPot} pots were washed.`);
        console.log(`Leftover detergent ${fullLiquid} ml.`);
    }
    
}

dishwasher([2, 53, 65, 55, 'End']);
dishwasher([1, 10, 15, 10, 12, 13, 30]);