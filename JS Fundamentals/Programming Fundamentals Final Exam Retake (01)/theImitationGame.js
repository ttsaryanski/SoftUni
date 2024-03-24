function theImitationGame(array) {

    let message = array.shift();
    let tokens = array.shift();

    while (tokens !== 'Decode') {
        let token = tokens.split('|');
        let command = token[0];
        switch (command) {
            case 'Move':
                let lettersCount = Number(token[1]);
                let tmpMessage = message.slice(0, lettersCount);
                message = message.substring(lettersCount);
                message += tmpMessage; 
                break;

            case 'Insert':
                let idx = Number(token[1]);
                let letter = token[2];
                let messageArr = message.split('');
                messageArr.splice(idx, 0, letter);
                message = messageArr.join('');
                break;

            case 'ChangeAll':
                let targetStr = token[1];
                let newStr = token[2];
                while (message.includes(targetStr)) {
                    message = message.replace(targetStr, newStr);
                }
                break;
        }

        tokens = array.shift();
    }
    console.log(`The decrypted message is: ${message}`);
    
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);
