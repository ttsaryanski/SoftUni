function needForSpeedIII(arr) {

    let carObj = {};
    let carCount = Number(arr.shift());
    let row = arr.shift();
    while (carCount !== 0) {
        let token = row.split('|');
        let car = token[0];
        let mileage = Number(token[1]);
        let fuel = Number(token[2]);
        carObj[car] = { mileage, fuel };

        carCount--;
        row = arr.shift();
    }
    while (row !== 'Stop') {
        let token = row.split(' : ');
        let command = token.shift();
        if (command === 'Drive') {
            let car = token.shift();
            let [distance, fuel] = token.map(Number);
            if (carObj[car].fuel < fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                carObj[car].mileage += distance;
                carObj[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (carObj[car].mileage >= 100000) {
                delete carObj[car];
                console.log(`Time to sell the ${car}!`);
            }
        } else if (command === 'Refuel') {
            let car = token[0];
            let fuel = Number(token[1]);
            if ((carObj[car].fuel + fuel) > 75) {
                let neededFuel = 75 - carObj[car].fuel;
                carObj[car].fuel = 75;
                console.log(`${car} refueled with ${neededFuel} liters`);
            } else {
                carObj[car].fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if (command === 'Revert') {
            let car = token[0];
            let kilometers = Number(token[1]);
            if ((carObj[car].mileage - kilometers) < 10000) {
                carObj[car].mileage = 10000;
            } else {
                carObj[car].mileage -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }

        row = arr.shift();
    }
    let carArr = Object.entries(carObj);
    for (let [car, info] of carArr) {
        let [mileage, fuel] = Object.entries(info);
        console.log(`${car} -> Mileage: ${mileage[1]} kms, Fuel in the tank: ${fuel[1]} lt.`);
    }
    
}

needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);
