function shootForTheWin(array) {

    let targets = array.shift().split(' ').map(Number);
    let shot = 0;
    
    for (let iterator of array) {
        if (iterator !== 'End') {
            let idx = Number(iterator);
            if (idx >= 0 && idx < targets.length) {
                for (let i = 0; i < targets.length; i++) {
                    if (targets[idx] !== -1 && i !== idx) {
                        if (targets[i] > targets[idx] && targets[i] !== -1) {
                            targets[i] -= targets[idx]
                        } else if (targets[i] <= targets[idx] && targets[i] !== -1) {
                            targets[i] += targets[idx]
                        }
                    }      
                }
                if (targets[idx] !== -1) {
                    targets[idx] = -1;
                    shot ++;
                }
            }
        } else {
            console.log(`Shot targets: ${shot} -> ${targets.join(' ')}`);
        }
    }
    
}

shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
