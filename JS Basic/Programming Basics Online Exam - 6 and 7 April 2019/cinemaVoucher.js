function cinemaVoucher(input) {
    let voucherPrice = Number(input[0]);

    let command = input[1];
    let i = 2;
    let ticketCount = 0;
    let otherCount = 0;

    while (command !== "End") {
        let purchase = command;
        if (purchase.length > 8) {
            let value1 = purchase.charCodeAt(0);
            let value2 = purchase.charCodeAt(1);
            let sum = value1 + value2;
            if (sum <= voucherPrice) {
                ticketCount++;
                voucherPrice -= sum;
            } else {
                break;
            }
            command = input[i];
            i++;
        } else {
            let value = purchase.charCodeAt(0);
            if (value <= voucherPrice) {
                otherCount++;
                voucherPrice -= value;
            } else {
                break;
            }
            command = input[i];
            i++;
        }   
    }
    if (command === "End") {
        console.log(ticketCount);
        console.log(otherCount);
    } else {
        console.log(ticketCount);
        console.log(otherCount);
    }
    // string = "C";
    // value = string.charCodeAt(0);
    // console.log(value);
}

// cinemaVoucher(["300",
// "Captain Marvel",
// "popcorn",
// "Pepsi"]);

cinemaVoucher(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"]);
