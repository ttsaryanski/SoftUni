function bills(input) {
    let mountCount = Number(input[0]);
    let elPriceMount = 0;
    let elFullPrice = 0;


    for (let i = 1; i < input.length; i++) {
        elPriceMount = Number(input[i]);
        elFullPrice += elPriceMount;
    }
    console.log(`Electricity: ${elFullPrice.toFixed(2)} lv`);
    console.log(`Water: ${(mountCount * 20).toFixed(2)} lv`);
    console.log(`Internet: ${(mountCount * 15).toFixed(2)} lv`);
    console.log(`Other: ${((elFullPrice + (mountCount * 20) + (mountCount * 15)) * 1.20).toFixed(2)} lv`);
    console.log(`Average: ${((elFullPrice + (mountCount * 20) + (mountCount * 15) + ((elFullPrice + (mountCount * 20) + (mountCount * 15)) * 1.20)) / mountCount).toFixed(2)} lv`);


}

// bills(["5",
// "68.63",
// "89.25",
// "132.53",
// "93.53",
// "63.22"]);

bills(["8",
"123.54",
"231.54",
"140.23",
"100",
"122.4",
"430",
"178.52",
"64.2"]);
