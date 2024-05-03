function postOffice(array) {

    let value = array.join('');
    let arr = value.split('|');
    let firstPart = arr[0];
    let secondPart = arr[1];
    let thirdPart = arr[2];

    let firstPattern = /([#$%\*&])(?<uperletter>[A-Z]+)\1/g;
    let uperLetterArr;
    while ((exec = firstPattern.exec(firstPart)) !== null) {
        uperLetterArr = exec.groups.uperletter.split('');
    }
    
    let secondPattern = /\d{2,}:\d{2,}/g;
    let letterAndLengthArr = [];
    while ((exec = secondPattern.exec(secondPart)) !== null) {
        let [letter, length] = exec[0].split(':');
        letter = String.fromCharCode(Number(letter));
        length = Number(length) + 1;
        let value = `${letter}:${length}`;
        if (uperLetterArr.includes(letter) && (!letterAndLengthArr.includes(value))) {
            letterAndLengthArr.push(value);
        }
    }

    let wordArr = thirdPart.split(' ');
    for (let k = 0; k < uperLetterArr.length; k++) {
        let firstLetter = uperLetterArr[k];
        for (let l = 0; l < letterAndLengthArr.length; l++) {
            let [letter, length] = letterAndLengthArr[l].split(':');
            length = Number(length);
            if (firstLetter === letter) {
                for (let m = 0; m < wordArr.length; m++) {
                    let word = wordArr[m];
                    if (word[0] === firstLetter && word.length === length) {
                        console.log(word);
                    }
                }
            }
        }
    }
    
}

postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);