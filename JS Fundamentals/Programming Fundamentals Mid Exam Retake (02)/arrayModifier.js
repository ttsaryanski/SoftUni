function arrayModifier(array) {

    let arr = array.shift().split(' ').map(Number);
    let token = array.shift();

    while (token !== 'end') {
        let commands = token.split(' ');
        let command = commands[0];
        let idx1 = Number(commands[1])
        let idx2 = Number(commands[2])
        switch (command) {
            case 'swap':
                let tmp = arr[idx1];
                arr[idx1] = arr[idx2];
                arr[idx2] = tmp;
                break;
            case 'multiply':
                arr[idx1] = arr[idx1] * arr[idx2];
                break;
            case 'decrease':
                arr = arr.map(n => n - 1);
                break;
        }

        token = array.shift();
    }
    if (token === 'end') {
        console.log(arr.join(', '));
    }
    
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);
