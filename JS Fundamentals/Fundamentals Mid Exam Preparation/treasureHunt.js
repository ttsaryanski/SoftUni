function treasureHunt(array) {

    let treasure = array.shift().split('|');
    
    for (let token of array) {
        if (token !== 'Yohoho!') {
            let commands = token.split(' ') ;
            let command = commands[0];

            switch (command) {
                case 'Loot':
                    let item = '';
                    for (let i = 1; i < commands.length; i++) {
                        item = commands[i];
                        if (!treasure.includes(item)) {
                            treasure.unshift(item);
                        }
                    }
                    break;
                case 'Drop':
                    let idx = commands[1];
                    if (idx >= 0 && idx < treasure.length) {
                        let tmp = treasure[idx];
                        treasure.splice(idx, 1);
                        treasure.push(tmp);
                    }
                    break;
                case 'Steal':
                    let count = commands[1];
                    let stealsArr = [];
                    if ( treasure.length >= count ) {
                        for (let j = count; j > 0; j--) {
                            let tmp = treasure.pop();
                            stealsArr.push(tmp);
                        }
                    } else {
                        for (let m = treasure.length; m > 0; m--) {
                            let tmp = treasure.pop();
                            stealsArr.push(tmp);
                        }
                    }
                    stealsArr.reverse();
                    console.log(stealsArr.join(', '));
                    break;
            }
        } else {
            if (treasure.length === 0) {
                console.log('Failed treasure hunt.');
            } else {
                let sum = 0;
                for (let k = 0; k < treasure.length; k++) {
                    sum += treasure[k].length;
                }
                let average = sum / treasure.length;
                console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
            }
        } 
    }
    
}

treasureHunt([
    "Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]);
treasureHunt([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"
]);
