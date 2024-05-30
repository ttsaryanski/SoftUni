function calorieObject(array) {

    let obj = {};

    for (let i = 0; i < array.length; i += 2) {
        let key = array[i];
        let value = Number(array[i + 1]);

        obj[key] = value;
    }

    console.log(obj);
    
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
