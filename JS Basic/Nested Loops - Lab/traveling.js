function traveling(input) {
    let i = 0;
    let command = input[i];
    i++;

    while (command !== "End") {
        let destination = command;
        let budget = Number(input[i]);
        i++;
        let savedMoney = 0;

        while (savedMoney < budget) {
            let money = Number(input[i]);
            i++;
            savedMoney += money;
        }
        console.log(`Going to ${destination}!`);

        command = input[i];
        i++;

    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);

// traveling(["France",
// "2000",
// "300",
// "300",
// "200",
// "400",
// "190",
// "258",
// "360",
// "Portugal",
// "1450",
// "400",
// "400",
// "200",
// "300",
// "300",
// "Egypt",
// "1900",
// "1000",
// "280",
// "300",
// "500",
// "End"]);