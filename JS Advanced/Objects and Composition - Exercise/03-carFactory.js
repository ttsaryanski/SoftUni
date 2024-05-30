function carFactory(input) {

    let result = {
        model: '',
        engine: {},
        carriage: { type: '', color: ""},
        wheels: []
    };

    result.model = input.model;

    if (input.power <= 90) {
        result.engine = { power: 90, volume: 1800 };
    } else if (input.power <= 120) {
        result.engine = { power: 120, volume: 2400 };
    } else if (input.power <= 200) {
        result.engine = { power: 200, volume: 3500 };
    }

    result.carriage.type = input.carriage;
    result.carriage.color = input.color;

    let wheel = [];
    let wheelsize = 0;
    if (input.wheelsize % 2 === 0) {
        wheelsize = input.wheelsize - 1;
    } else {
        wheelsize = input.wheelsize;
    }

    wheel = Array(4).fill(wheelsize);
    
    result.wheels = wheel;

    return result;
    
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});
