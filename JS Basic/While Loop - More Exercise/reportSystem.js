function reportSystem(input) {

    let target = input[0];
    let curSum = 0;
    let curSumCash = 0;
    let curSumCard = 0;
    let cashCount = 0;
    let cardCount = 0;

    for (let i = 1; i < input.length; i += 2) {
        let command = input[i];
        if (command !== 'End') {
            let cash = Number(input[i]);
            let card = Number(input[i + 1]);
            if (cash > 100) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                cashCount++;
                curSumCash += cash;
            }
            if (card < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                cardCount++;
                curSumCard += card;
            }
            curSum = curSumCash + curSumCard;
            if (curSum >= target) {
                console.log(`Average CS: ${(curSumCash / cashCount).toFixed(2)}`);
                console.log(`Average CC: ${(curSumCard / cardCount).toFixed(2)}`);
                break;
            }
        } else {
            console.log(`Failed to collect required money for charity.`);
        }
    }
    
}

reportSystem([500, 120, 8, 63, 256, 78, 317]);
reportSystem([600, 86, 150, 98, 227, 'End']);