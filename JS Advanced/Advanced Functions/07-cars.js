function cars(array) {

    let cars = {};
    let parentName = '';

    array.forEach(token => {
        let [command, name, parameter1, parameter2] = token.split(' ');
        if (command === 'create') {
            if (parameter1 === 'inherit') {
                create(name, parameter2);
            } else {
                create(name);
            }
        } else if (command === 'set') {
            set(name, parameter1, parameter2);
        } else if (command === 'print') {
            print(name);
        }
    });

    function create(name, parentName) {
        let parent = cars[parentName];
        let obj = {};
        if (parent) {
            obj = Object.create(parent);
        }
        cars[name] = obj;
    };

    function set(name, key, value) {
        let obj = cars[name];
        obj[key] = value;
    };

    function print(name) {
        let obj = cars[name];
        let result = [];
        for (const key in obj) {
            result.push(`${key}:${obj[key]}`)
        }
        console.log(result.join(','));
    }

}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);
