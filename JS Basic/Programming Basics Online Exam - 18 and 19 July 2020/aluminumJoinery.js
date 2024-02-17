function aluminumJoinery(array) {

    let count = Number(array.shift());
    let type = array.shift();
    let delivery = array.shift();
    let price = 0;

    if (count < 10) {
        console.log('Invalid order');
    } else {
        if (type === '90X130') {
            price = count * 110;
            if (count > 30 && count <= 60) {
                price *= 0.95;
            } else if (count > 60) {
                price *= 0.92;
            }
        } else if (type === '100X150') {
            price = count * 140;
            if (count > 40 && count <= 80) {
                price *= 0.94;
            } else if (count > 80) {
                price *= 0.90;
            }
        } else if (type === '130X180') {
            price = count * 190;
            if (count > 20 && count <= 50) {
                price *= 0.93;
            } else if (count > 50) {
                price *= 0.88;
            }
        } else if (type === '200X300') {
            price = count * 250;
            if (count > 25 && count <= 50) {
                price *= 0.91;
            } else if (count > 60) {
                price *= 0.86;
            }
        }
        if (delivery === 'With delivery') {
            price += 60;
        }
        if (count > 99) {
            price *= 0.96;
        }
        console.log(`${price.toFixed(2)} BGN`);
    }
    
}

aluminumJoinery(["40", "90X130", "Without delivery"]);
aluminumJoinery(["105", "100X150", "With delivery"]);
aluminumJoinery(["2", "130X180", "With delivery"]);
