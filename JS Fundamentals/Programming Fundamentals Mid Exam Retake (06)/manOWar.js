function manOWar(array) {
    
    let pirateShip = array.shift().split('>').map(Number);
    let warShip = array.shift().split('>').map(Number);
    let maxHealth = Number(array.shift());

    for (let token of array) {
        if (token !== 'Retire') {
            let commands = token.split(' ');
            let command = commands[0];
            let value1 = Number(commands[1]);        
            let value2 = Number(commands[2]);        
            let value3 = Number(commands[3]);

            if (command === 'Fire') {
                let idx = Number(value1);
                if (idx >= 0 && idx < warShip.length) {
                    warShip[idx] -= Number(value2);
                    if (warShip[idx] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
            } else if (command === 'Defend') {
                let idx1 = Number(value1);
                let idx2 = Number(value2);
                if (idx1 >= 0 && idx2 < pirateShip.length) {
                    for (let i = idx1; i <= idx2; i++) {
                        pirateShip[i] -= Number(value3);
                        if (pirateShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            return;
                        }
                    }
                }
            } else if (command === 'Repair') {
                let idx = Number(value1);
                if (idx >= 0 && idx < pirateShip.length) {
                    pirateShip[idx] += Number(value2);
                    if (pirateShip[idx] > maxHealth) {
                        pirateShip[idx] = maxHealth;
                    }
                }
            } else if (command === 'Status') {
                let count = 0;
                for (let j = 0; j < pirateShip.length; j++) {
                    if (pirateShip[j] < maxHealth * 0.2) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
            }
        }
        if (token === 'Retire') {
            pirateStatus = 0;
            warStatus = 0;
            for (let k = 0; k < pirateShip.length; k++) {
                pirateStatus += pirateShip[k];
            }
            for (let l = 0; l < warShip.length; l++) {
                warStatus += warShip[l];
            }
            console.log(`Pirate ship status: ${pirateStatus}`);
            console.log(`Warship status: ${warStatus}`);
        }       
    }

}

// manOWar([
//     "12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"
// ]);
manOWar([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"
]);
