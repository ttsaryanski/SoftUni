function gladiatorInventory(arr) {

    let startInvertar = arr.shift().split(' ');

    while (arr.length > 0) {
        let commands = arr.shift().split(' ');
        let command = commands[0];
        let invertar = commands[1];

        if (command === 'Buy') {
            if(!startInvertar.includes(invertar)) {
            startInvertar.push(invertar);
            }
        } else if (command === 'Trash') {
            if (startInvertar.includes(invertar)) {
                let idx = startInvertar.indexOf(invertar);
                startInvertar.splice(idx, 1);
            }
        } else if (command === 'Repair') {
            if (startInvertar.includes(invertar)) {
                let idx = startInvertar.indexOf(invertar);
                startInvertar.splice(idx, 1);
                startInvertar.push(invertar);
            }
        } else if (command === 'Upgrade') {
            let token = invertar.split('-')
            let curInvertar = token[0];
            let upgrade = token[1];

            if (startInvertar.includes(curInvertar)) {
                let idx = startInvertar.indexOf(curInvertar);
                startInvertar.splice(idx + 1, 0, `${curInvertar}:${upgrade}`);
            }
        }
    }
    console.log(startInvertar.join(' '));
    
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
