function computerStore(array) {

    let sumWithoutTax = 0;
    let fullTax = 0;
    let totalSum = 0;
    for (let command of array) {
        if (command !== 'special' && command !== 'regular') {
            let curNum = Number(command);
            if (curNum < 0) {
                console.log(`Invalid price!`);
                continue;
            } else {
                sumWithoutTax += curNum;
                fullTax += curNum * 0.2;
            }
        }
        totalSum = sumWithoutTax + fullTax;
        if (command === 'special') {
            totalSum *= 0.9;
        }
    }
    if (totalSum === 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${sumWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${fullTax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalSum.toFixed(2)}$`);
    }

}

// computerStore([
//     "1050",
//     "200",
//     "450",
//     "2",
//     "18.50",
//     "16.86",
//     "special"]);
computerStore([
    "1023",
    "15",
    "-20",
    "-5.50",
    "450",
    "20",
    "17.66",
    "19.30",
    "regular",
]);
computerStore(["regular"]);
