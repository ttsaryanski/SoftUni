function secretChat(arr) {

    let message = arr.shift();
    let row = arr.shift();

    while (row !== 'Reveal') {
        let token = row.split(':|:');
        let command = token.shift();
        if (command === 'InsertSpace') {
            let idx = Number(token[0]);
            message = message.slice(0, idx) + ' ' + message.slice(idx);
            console.log(`${message}`);
        } else if (command === 'Reverse') {
            let subStr = token[0];
            if (message.includes(subStr)) {
                let idx = message.indexOf(subStr);
                let tmpMessage = message.slice(0, idx) + message.slice(idx + subStr.length);
                subStr = subStr.split('').reverse().join('');
                tmpMessage += subStr;
                message = tmpMessage;
                console.log(`${message}`);
            } else {
                console.log('error');
            }
        } else if (command === 'ChangeAll') {
            let oldStr = token[0];
            let newStr = token[1];
            if (message.includes(oldStr)) {
                while (message.includes(oldStr)) {
                    message = message.replace(oldStr, newStr);
                }
            }
            console.log(`${message}`);
        }

        row = arr.shift();
    }
    console.log(`You have a new text message: ${message}`);

    
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
