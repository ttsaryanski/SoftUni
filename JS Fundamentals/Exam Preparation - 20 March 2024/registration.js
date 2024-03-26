function registration(arr) {

    let userName = arr.shift();
    let row = arr.shift();

    while (row !== 'Registration') {
        let token = row.split(' ');
        let command = token.shift();
        if (command === 'Letters') {
            let lettersSize = token[0];
            if (lettersSize === 'Lower') {
                userName = userName.toLowerCase();
            } else {
                userName = userName.toUpperCase();
            }
            console.log(userName);
        } else if (command === 'Reverse') {
            let [startIdx, endIdx] = token.map(Number);
            if (startIdx >= 0 && endIdx < userName.length) {
                let str = userName.slice(startIdx, endIdx + 1).split('').reverse().join('');
                console.log(str);
            } else {
                row = arr.shift();
                continue;
            }
        } else if (command === 'Substring') {
            let str = token[0];
            if (userName.includes(str)) {
                userName = userName.replace(str, '');
                console.log(userName);
            } else {
                console.log(`The username ${userName} doesn't contain ${str}.`);
            }
        } else if (command === 'Replace') {
            let char = token[0];
            if (userName.includes(char)) {
                while (userName.includes(char)) {
                    userName = userName.replace(char, '-');
                }
                console.log(userName);
           }
        } else if (command === 'IsValid') {
            let char = token[0];
            if (userName.includes(char)) {
                console.log('Valid username.');
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        }

        row = arr.shift();
    }

    
}

registration([
    'John',
    'Letters Lower',
    'Substring SA',
    'IsValid @',
    'Registration'
]);
registration([
    'ThisIsSoftUni',
    'Reverse 1 3',
    'Replace S',
    'Substring hi',
    'Registration'
]);
