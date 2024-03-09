function garage(array) {

    let garageObj = {};

    for (let row of array) {
        let [number, info] = row.split(' - ');
        if (number in garageObj) {
            garageObj[number].push(info);
        } else {
            garageObj[number] = [info];
        }
    }
    let result = ''
    for (let [number, info] of Object.entries(garageObj)) {
        result += `Garage № ${number}\n`;
        for (let curInfo of info) {
            for (let cars of curInfo) {
                curInfo = curInfo.replace(': ', ' - ')
            }
            result += `--- ${curInfo}\n`;
        }
    }
    console.log(result);
    
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
// garage([
//     '1 - color: green, fuel type: petrol',
//     '1 - color: dark red, manufacture: WV',
//     '2 - fuel type: diesel',
//     '3 - color: dark blue, fuel type: petrol'
// ]);