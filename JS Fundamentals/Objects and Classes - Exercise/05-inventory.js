function inventory(array) {

    let list = [];

    for (let token of array) {
        let [name, level, items] = token.split(' / ')
        let heroObj = {name: name, level: level, items: items}
        list.push(heroObj);
    }
    let newList = list.sort((a, b) => a.level - b.level);
    for (let curHero of newList) {
        console.log(`Hero: ${curHero.name}`);
        console.log(`level => ${curHero.level}`);
        console.log(`items => ${curHero.items}`);
    }
    
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
