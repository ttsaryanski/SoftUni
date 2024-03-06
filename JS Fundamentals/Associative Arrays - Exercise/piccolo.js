function piccolo(arr) {

    let carsMap = new Map();
    for (let carsStr of arr) {
        let car = carsStr.split(', ');
        if (car[0] === 'IN') {
            carsMap.set(car[1], 1);
        } else if (car[0] === 'OUT') {
            if (carsMap.has(car[1])) {
                carsMap.delete(car[1]);
            }
        }
    }

    if (carsMap.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sortedArr = Array.from(carsMap.entries()).sort((a, b) => a[0].localeCompare(b[0]) || a[0] - b[0]);
        for (let [registration, num] of sortedArr) {
            console.log(registration);
        }
    }
    
}

piccolo([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
]);
piccolo([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "OUT, CA1234TA"
]);
