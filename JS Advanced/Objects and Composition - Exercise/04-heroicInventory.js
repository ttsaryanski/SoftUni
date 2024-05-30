function heroicInventory(array) {

    let result = [];
    
    for (const row of array) {
        if (row.length === 0) {
            continue;
        }
        let [name, level, items] = row.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({ name, level, items });
    }
    return JSON.stringify(result);
    
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
heroicInventory([
    'Jake / 1000 / Gauss, HolidayGrenade'
]);
