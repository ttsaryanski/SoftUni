function blackFlag(array) {

    let day = Number(array.shift());
    let monneyPerDay = Number(array.shift());
    let target = Number(array.shift());
    let total = 0;

    for (let i = 1; i <= day; i++) {
        total += monneyPerDay;
        if (i % 3 === 0) {
            total += monneyPerDay * 0.5;
        }
        if (i % 5 === 0) {
            total *= 0.70;
        }
    }
    if (total >= target) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((total / target) * 100).toFixed(2)}% of the plunder.`);
    }

}

blackFlag(["5", "40", "100"]);
blackFlag(["10", "20", "380"]);
