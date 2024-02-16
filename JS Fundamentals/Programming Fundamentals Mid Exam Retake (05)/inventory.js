function inventory(array) {

    let list = array.shift().split(', ');
    
    for (let token of array) {
        if (token !== 'Craft!') {
            let commands = token.split(' - ') ;
            let command = commands[0];
            let item = commands[1];

            if (command === 'Collect') {
                if (!list.includes(item)) {
                    list.push(item);
                }
            } else if (command === 'Drop') {
                if (list.includes(item)) {
                    let idx = list.indexOf(item);
                    list.splice(idx, 1);
                }
            } else if (command === 'Combine Items') {
                let items = item.split(':');
                let oldItem = items[0];
                let newItem = items[1];
                if (list.includes(oldItem)) {
                    let idx = list.indexOf(oldItem);
                    list.splice(idx + 1, 0, newItem);
                }
            } else if (command === 'Renew') {
                if (list.includes(item)) {
                    let tmp = item;
                    let idx = list.indexOf(item);
                    list.splice(idx, 1);
                    list.push(tmp);
                }
            }
        } else {
            console.log(list.join(', '));
        }
    }
    
}

inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]);
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);
