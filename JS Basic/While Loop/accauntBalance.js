function accauntBalance(input) {
    //let payment = 0;
    let sum = 0;

    let i = 0;
    let payment = input[i];
    while (payment !== "NoMoreMoney") {
        let paymentNumber = Number(payment);
        if (paymentNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        
        sum += paymentNumber;
        console.log(`Increase: ${paymentNumber.toFixed(2)}`);

        i++;
        payment = input[i];

    }

    console.log(`Total: ${sum.toFixed(2)}`);
    
}

// accauntBalance(["5.51", 
// "69.42",
// "100",
// "NoMoreMoney"]);

accauntBalance(["120",
"45.55",
"-150"]);