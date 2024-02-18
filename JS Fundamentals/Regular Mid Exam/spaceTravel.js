function spaceTravel(array) {

    let travel = array.shift().split('||');
    let fuel = Number(array.shift());
    let ammunition = Number(array.shift());

    for (let token of travel) {
        if (token !== 'Titan') {
            let curCommands = token.split(' ');
            let command = curCommands[0];
            let value = Number(curCommands[1]);
            if (command === 'Travel') {
                if (fuel - value >= 0) {
                    console.log(`The spaceship travelled ${value} light-years.`);
                    fuel -= value;
                } else {
                    console.log(`Mission failed.`);
                    return;
                }
            } else if (command === 'Enemy') {
               if (ammunition - value >= 0) {
                    console.log(`An enemy with ${value} armour is defeated.`);
                    ammunition -= value;
               } else if (ammunition - value < 0 && fuel >= value * 2) {
                    console.log(`An enemy with ${value} armour is outmaneuvered.`);
                    fuel -= value * 2
               } else if (ammunition - value < 0 && fuel < value * 2) {
                    console.log(`Mission failed.`);
                    return;
               }
            } else if (command === 'Repair') {
                fuel += value;
                ammunition += value * 2;
                console.log(`Ammunitions added: ${value * 2}.`);
                console.log(`Fuel added: ${value}.`);
            }
        } else {
            console.log(`You have reached Titan, all passengers are safe.`);
            return;
        }
    }
    
}

spaceTravel([
    'Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80'
]);
// spaceTravel([
//     'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
//     '60',
//     '100'
// ]);
