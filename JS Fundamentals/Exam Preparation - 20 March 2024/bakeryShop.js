function bakeryShop(arr) {

    let listObj = {};
    let cell = 0;
    let row = arr.shift();

    while (row !== 'Complete') {
        let token = row.split(' ');
        let command = token.shift();
        if (command === 'Receive') {
            let count = Number(token[0]);
            let food = token[1];
            if (count <= 0) {
                continue;
            } else {
                if (food in listObj) {
                    listObj[food] += count;
                } else {
                    listObj[food] = count;
                }
            }
        } else if (command === 'Sell') {
            let count = Number(token[0]);
            let food = token[1];
            if (!listObj.hasOwnProperty(food)) {
                console.log(`You do not have any ${food}.`);
            } else {
                if (listObj[food] < count) {
                    cell += listObj[food];
                    console.log(`There aren't enough ${food}. You sold the last ${listObj[food]} of them.`);
                    delete listObj[food];
                } else {
                    listObj[food] -= count;
                    console.log(`You sold ${count} ${food}.`);
                    cell += count;
                    if (listObj[food] === 0) {
                        delete listObj[food];
                    }
                }
            }
        }

        row = arr.shift();
    }
    let entries = Object.entries(listObj);
    entries.forEach(el => console.log(`${el[0]}: ${el[1]}`));
    console.log(`All sold: ${cell} goods`);
    
}

bakeryShop([
    'Receive 105 cookies',
    'Receive 10 donuts',
    'Sell 10 donuts',
    'Sell 1 bread',
    'Complete'
]);
bakeryShop([
    'Receive 10 muffins',
    'Receive 23 bagels',
    'Sell 5 muffins',
    'Sell 10 bagels',
    'Complete'
]);
