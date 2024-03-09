function armies(array) {

    let listLeaderObj = {};

    for (let token of array) {
        if (token.includes('arrives')) {
            let idx = token.indexOf('arrives');
            let name = token.substring(0, idx - 1);
            listLeaderObj[name] = [];
        }
        if (token.includes('defeated')) {
            let idx = token.indexOf('defeated');
            let name = token.substring(0, idx - 1);
            delete listLeaderObj[name];
        }
        if (token.includes(':')) {
            let arr = token.split(': ')
            if (arr[0] in listLeaderObj) {
                if (listLeaderObj[arr[0]].length === 0) {
                    listLeaderObj[arr[0]] = [arr[1]];
                } else {
                    listLeaderObj[arr[0]].push(arr[1]);
                }
            }
        }
        if (token.includes('+')) {
            let secondArr = token.split(' + ');
            for (let [liader, armyes] of Object.entries(listLeaderObj)) {
                for (let i = 0; i < armyes.length; i++) {
                    let armyStr = armyes[i];
                    let armyArr = armyStr.split(', ');
                    if (armyArr[0] === secondArr[0]) {
                        let curArmyQty = Number(armyArr[1])
                        curArmyQty += Number(secondArr[1]);
                        let newArmyes = `${armyArr[0]}, ${curArmyQty}`;
                        armyes.splice(i, 1, newArmyes);
                        listLeaderObj[liader] = armyes;
                        break;
                    } 
                }
            }
        }
    }
    let listWithFullQty = {};
    for (let [name, nameArmies] of Object.entries(listLeaderObj)) {
        let fullNameArmyQty = 0;
        for (let curNameArmiesStr of nameArmies) {
            let curNameArmies = curNameArmiesStr.split(', ')
            let [curNameArmy, armyQty] = curNameArmies
            fullNameArmyQty += Number(armyQty);
        }
        listWithFullQty[name] = fullNameArmyQty;
    }
    let sortedListQty = Object.entries(listWithFullQty).sort((a, b) => b[1] - a[1]);
    for (let [name, qty] of sortedListQty) {
        console.log(`${name}: ${qty}`);
        let sortedNameArmy = listLeaderObj[name].sort((a, b) => {
            let qtyA = Number(a.split(', ')[1]);
            let qtyB = Number(b.split(', ')[1]);
            return qtyB - qtyA;
        });
        for (let curArmy of sortedNameArmy) {
            let [armyName, armyqty] = curArmy.split(', ')
            console.log(`>>> ${armyName} - ${armyqty}`);
        }
    }
    
}

armies([
    'Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000',
    'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated', 'Porter: Retix, 3205'
]);
armies([
    'Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives',
    'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'
]);
