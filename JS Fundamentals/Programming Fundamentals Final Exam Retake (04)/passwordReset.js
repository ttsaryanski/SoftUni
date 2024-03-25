function passwordReset(arr) {

    let passowrd = arr.shift();
    let commands = arr.shift();
    
    while (commands !== 'Done') {
        let token = commands.split(' ');
        let command = token.shift();
        if (commands === 'TakeOdd') {
            let newPassowrd = '';
            for (let i = 0; i < passowrd.length; i++) {
                if (i % 2 !== 0) {
                    newPassowrd += passowrd[i];
                }
            }
            passowrd = newPassowrd;
            console.log(`${passowrd}`);
        } else if (command === 'Cut') {
            let [idx, length] = token.map(Number);
            passowrd = passowrd.slice(0, idx) + passowrd.slice(idx + length);
            console.log(`${passowrd}`);
        } else if (command === 'Substitute') {
            let [oldStr, newStr] = token;
            if (passowrd.includes(oldStr)) {
                while (passowrd.includes(oldStr)) {
                    passowrd = passowrd.replace(oldStr, newStr);
                }
                console.log(`${passowrd}`);
            } else {
                console.log('Nothing to replace!');
            }
        }
        commands = arr.shift();
    }
    if (commands === 'Done') {
        console.log(`Your password is: ${passowrd}`);
    }

}

passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]);