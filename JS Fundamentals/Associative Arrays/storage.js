function storage(arr) {
    
    let listMap = new Map();

    for (let row of arr) {
        let [product, qty] = row.split(' ');
        qty = Number(qty);
        if (listMap.has(product)) {
           qty += listMap.get(product);
        }

        listMap.set(product, qty);
        
    }
    for (let [product, qty] of listMap) {
        console.log(`${product} -> ${qty}`);
    }
    
}

storage(
    ['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
    );
storage(
    ['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
    );
