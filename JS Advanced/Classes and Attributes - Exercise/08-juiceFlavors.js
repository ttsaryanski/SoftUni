function juiceFlavors(arr) {

    let store = new Map();
    let storeBootle = new Map();

    for (let row of arr) {
        let [type, qty] = row.split(' => ');
        qty = Number(qty);

        if (!store.has(type)) {
            store.set(type, 0);
        }
        store.set(type, store.get(type) + qty);

        if (store.get(type) >= 1000) {
            let bottle = parseInt(store.get(type) / 1000);
            if (!storeBootle.has(type)) {
                storeBootle.set(type, 0);
            }
            store.set(type, store.get(type) - bottle * 1000);
            storeBootle.set(type, storeBootle.get(type) + bottle);
        }

    }

    for (let [key, value] of storeBootle) {
        console.log(`${key} => ${value}`);
    }

}

juiceFlavors([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);
