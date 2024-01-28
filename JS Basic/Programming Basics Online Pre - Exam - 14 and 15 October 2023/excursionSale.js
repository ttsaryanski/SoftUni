function excursionSale(input) {
    let seaCount = Number(input[0]);
    let mountainCount = Number(input[1]);
    let fullCount = seaCount + mountainCount;

    let fullProfit = 0;
    let soldSea = 0;
    let soldMountain = 0;

    let i = 2;
    let command = input[i];
    i++;
    
    while (command !== "Stop") {
        let soldType = command;
            if (soldType === "sea") {
                soldSea++;
                if (soldSea > seaCount) {
                    command = input[i];
                    i++
                    continue;
                } else {
                    fullProfit += 680;
                    fullCount -= 1;
                        if (fullCount === 0) {
                            console.log(`Good job! Everything is sold.`);
                            console.log(`Profit: ${fullProfit} leva.`);
                            break;
                        }
                command = input[i];
                i++
            }
            
        } else if (soldType === "mountain") {
                soldMountain++;
                if (soldMountain > mountainCount) {
                    command = input[i];
                    i++
                    continue;
                } else {
                    fullProfit += 499;
                    fullCount -= 1;
                        if (fullCount === 0) {
                            console.log(`Good job! Everything is sold.`);
                            console.log(`Profit: ${fullProfit} leva.`);
                            break;
                        }
                command = input[i];
                i++;
            }
        }
    }
    if (command === "Stop") {
        console.log(`Profit: ${fullProfit} leva.`);
    }
    
}

// excursionSale(["2",
// "2",
// "sea",
// "mountain",
// "sea",
// "sea",
// "mountain"]);

excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"]);