function gladiatorExpenses(countFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let figths = 0;
    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;
    let sum = 0  ;

    for (let curFights = 1; curFights <= countFights; curFights++) {
        figths++;

        if (figths % 2 === 0) {
            helmetBroken++;
            sum += helmetPrice;

            if (figths % 2 === 0 && figths % 3 === 0) {
                swordBroken++;
                sum += swordPrice;
                shieldBroken++;
                sum += shieldPrice;

                if (shieldBroken % 2 === 0 && shieldBroken !== 0) {
                    armorBroken++;
                    sum += armorPrice;
                }
            }
        } else if (figths % 3 === 0) {
            swordBroken++;
            sum += swordPrice;
        }
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}

// gladiatorExpenses(7,
//  2,
//  3,
//  4,
//  5);
 gladiatorExpenses(23,
 12.50,
 21.50,
 40,
 200);

