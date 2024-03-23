function starEnigma(arr) {

    let messagesCount = Number(arr.shift());
    let patternLetters = /[sStTaArR]/g;
    let atackedPlanet = [];
    let destroyedPlanet = [];
    let decryptedMessages = [];

    for (let row of arr) {
        if (messagesCount > 0) {
            if (patternLetters.test(row)) {
                let num = row.match(patternLetters).length;
                let rowArr = row.split('');
                for (let i = 0; i < rowArr.length; i++) {
                    rowArr[i] = String.fromCharCode(rowArr[i].charCodeAt() - num);
                }
                decryptedMessages.push(rowArr.join(''));
            } else {
                decryptedMessages.push(row);
            }
            messagesCount--;
        }
    }
    

    let newPattern = /@(?<planetName>[A-Z][a-z]+)[^@\-!:>]*:(?<piopleCount>\d+)[^@\-!:>]*!(?<atackName>[AD])![^@\-!:>]*->(?<wariorsCount>\d+)/;
    for (let decryptedMessage of decryptedMessages) {
        if (newPattern.test(decryptedMessage)) {
            let result = newPattern.exec(decryptedMessage);
    
            if (result.groups.atackName === 'A') {
                atackedPlanet.push(result.groups.planetName);
            }
    
            if (result.groups.atackName === 'D') {
            destroyedPlanet.push(result.groups.planetName);
            }
        }
    }
    
    
    console.log(`Attacked planets: ${atackedPlanet.length}`);
    let sortedAttacked = atackedPlanet.sort((a, b) => a.localeCompare(b));
    for (let planetNameAttacked of sortedAttacked) {
            console.log(`-> ${planetNameAttacked}`);
    }
    
    
    console.log(`Destroyed planets: ${destroyedPlanet.length}`);
    let sortedDestroyed = destroyedPlanet.sort((a, b) => a.localeCompare(b));
    for (let planetNameDestroyed of sortedDestroyed) {
        console.log(`-> ${planetNameDestroyed}`);
    }
    
}

starEnigma([
    '2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
starEnigma([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
