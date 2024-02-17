function addBags(array) {

    let over20Price = Number(array.shift());
    let kg = Number(array.shift());
    let day = Number(array.shift());
    let count = Number(array.shift());
    let curPrice = 0;
    let total = 0;

    if (kg < 10) {
        curPrice = over20Price * 0.20;
    } else if (kg >= 10 && kg <= 20) {
        curPrice = over20Price * 0.50;
    } else if (kg > 20) {
        curPrice = over20Price;
    }

    if (day < 7) {
        curPrice *= 1.40;
    } else if (day >= 7 && day <= 30) {
        curPrice *= 1.15;
    } else if (day > 30) {
        curPrice *= 1.10;
    }
    total = count * curPrice;

    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
    
}

addBags(["30", "18", "15", "2"]);
addBags(["25.50", "5", "36", "6"]);
addBags(["63.80", "23", "3", "1"]);
