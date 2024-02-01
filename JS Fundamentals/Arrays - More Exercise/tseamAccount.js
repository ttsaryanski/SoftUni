function tseamAccount(array) {

    let account = array.shift();
    let accountArr = account.split(' ');

    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        if (command !== 'Play!') {
            let curCommand = array[i].split(' ');
            if (curCommand[0] === 'Install' && !accountArr.includes(curCommand[1])) {
                accountArr.push(curCommand[1]);
            } else if (curCommand[0] === 'Uninstall') {
                for (let j = 0; j < accountArr.length; j++) {
                    if (accountArr[j] === curCommand[1]) {
                        accountArr.splice(j, 1);
                        break;
                    }
                }
            } else if (curCommand[0] === 'Update') {
                for (let j = 0; j < accountArr.length; j++) {
                    if (accountArr[j] === curCommand[1]) {
                        accountArr.splice(j, 1);
                        accountArr.push(curCommand[1]);
                        break;
                    }
                }
            } else if (curCommand[0] === 'Expansion') {
                for (let j = 0; j < accountArr.length; j++) {
                    let str = curCommand[1].split('-');
                    if (accountArr[j] === str[0]) {
                        let insert = String(str[0]) + ':' + String(str[1])
                        accountArr.splice(j + 1, 0, insert);
                        break;
                    }
                }
            }
        }
    }

    console.log(accountArr.join(' '));

}

tseamAccount([
    "CS WoW Diablo",
    "Install LoL",
    "Uninstall WoW",
    "Update Diablo",
    "Expansion CS-Go",
    "Play!",
]);
tseamAccount([
    "CS WoW Diablo",
    "Uninstall XCOM",
    "Update PeshoGame",
    "Update WoW",
    "Expansion Civ-V",
    "Play!",
]);
