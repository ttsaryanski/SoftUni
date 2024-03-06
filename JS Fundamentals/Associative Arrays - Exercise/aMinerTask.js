function aMinerTask(arr) {

    let resource = {};

    for (let i = 0; i < arr.length; i += 2) {
        let type = arr[i];
        let qty = Number(arr[i + 1]);

        if (type in resource) {
            resource[type] += qty;
        } else {
            resource[type] = qty;
        }
    }
    for (let [type, qty] of Object.entries(resource)) {
        console.log(`${type} -> ${qty}`);
    }
    
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);
