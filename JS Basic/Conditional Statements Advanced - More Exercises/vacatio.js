function vacation(input) {
    let targetMoney = Number(input[0]);
    let realMoney = Number(input[1]);
    let spendDay = 0;
    let savedDay = 0;
    let pastDays = 0;

    let command = input[2];
    let i = 3;

    while (realMoney < targetMoney) {
        if (command === "spend") {
            let spendMoney = Number(input[i]);
            i++;
            realMoney -= spendMoney;
            spendDay++;
            pastDays ++;
                if (realMoney < 0) {
                    realMoney = 0;
                }
                if (spendDay === 5) {
                    console.log(`You can't save the money.`);
                    console.log(`${pastDays}`);
                    break;
                }
        } else if (command === "save") {
            let savedMoney = Number(input[i]);
            i++;
            realMoney += savedMoney;
            savedDay++;
            pastDays ++;
            spendDay = 0;
        }
        command = input[i];
        i++;
        

        if (realMoney >= targetMoney) {
            console.log(`You saved the money for ${pastDays} days.`);
            break;
        }
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"]);

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);