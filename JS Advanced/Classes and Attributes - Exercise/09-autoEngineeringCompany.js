function autoEngineeringCompany(arr) {

    let carBrand = new Map();

    for (let row of arr) {
        let [brand, model, qty] = row.split(' | ');
        qty = Number(qty);

        if (!carBrand.has(brand)) {
            carBrand.set(brand, new Map());
        }

        let models = carBrand.get(brand);
        if (!models.has(model)) {
            models.set(model, 0);
        }
        models.set(model, models.get(model) + qty);
    }

    for (let [brand, models] of carBrand) {
        console.log(`${brand}`);
        for (let [model, qty] of models) {
            console.log(`###${model} -> ${qty}`);
        }
    }

}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);