function counterStrike(array) {

    let energy = Number(array.shift());
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let num = 0;
        let command = array[i];
        if (command !== 'End of battle') {
            num = Number(array[i]);
            if (energy >= num) {
                count++;
                energy -= num;
                if (count % 3 === 0) {
                    energy += count;
                }
            } else {
                console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
                return;
            }
        } else {
            console.log(`Won battles: ${count}. Energy left: ${energy}`);
        }
    }
    
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
