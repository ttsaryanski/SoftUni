function activationKeys(array) {

    let message = array.shift();
    let token = array.shift();

    while (token !== 'Generate') {
        let commands = token.split('>>>');
        let command = commands[0];
        if (command === 'Contains') {
            let target = commands[1];
            if (message.includes(target)) {
                console.log(`${message} contains ${target}`);
            } else {
                console.log('Substring not found!');
            }
        } else if (command === 'Flip') {
            let letterSize = commands[1];
            let startIdx = Number(commands[2]);
            let endIdx = Number(commands[3]);
            let messageArr = message.split('');
            for (let i = startIdx; i < endIdx; i++) {
                if (letterSize === 'Upper') {
                    messageArr[i] = messageArr[i].toUpperCase();
                } else if (letterSize === 'Lower') {
                    messageArr[i] = messageArr[i].toLowerCase();
                }
            }
            message = messageArr.join('');
            console.log(message);
        } else if (command === 'Slice') {
            let startIdx = Number(commands[1]);
            let endIdx = Number(commands[2]);
            let startMsg = message.slice(0, startIdx);
            let endMsg = message.slice(endIdx);
            message = startMsg + endMsg;
            console.log(`${message}`);

        }

        token = array.shift();
    }
    console.log(`Your activation key is: ${message}`);
    
}

// activationKeys([
//     "abcdefghijklmnopqrstuvwxyz",
//     "Slice>>>2>>>6",
//     "Flip>>>Upper>>>3>>>14",
//     "Flip>>>Lower>>>5>>>7",
//     "Contains>>>def",
//     "Contains>>>deF",
//     "Generate"
// ]);
activationKeys([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);
