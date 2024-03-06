function cardGame(arr) {

    let gamersObj = {}

    for (let curInfo of arr) {
        let [name, cards] = curInfo.split(': ');
        let carsdArr = cards.split(', ');

        let cardsStr = carsdArr.join(' ');
        if (gamersObj.hasOwnProperty(name)) {
            gamersObj[name] += ` ${cardsStr}`;
        } else {
            gamersObj[name] = cardsStr;
        }
    }
    
    let gamersObjArr = Object.entries(gamersObj);
    for (let [gamer, cardsStr] of gamersObjArr) {
        let sum = 0;
        let cards = cardsStr.split(' ');
        let checkedsCards = [];
        for (let curCard of cards) {
            if (!checkedsCards.includes(curCard)) {
                checkedsCards.push(curCard);
            }
        }

        let powerObj = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
        let powerObjArr = Object.entries(powerObj);
        let typeObj = { S: 4, H: 3, D: 2, C: 1 }
        let typeObjArr = Object.entries(typeObj);
        for (let curCardStr of checkedsCards) {
            let curCard = curCardStr.split('');
            let type = curCard.pop();
            let power = '';
            for (let value of curCard) {
                power += value;
            }
            let a = 0;
            let b = 0;
            let curSum = 0;
            for (let m = 0; m < powerObjArr.length; m++) {
                if (powerObjArr[m][0] === power) {
                    a = powerObjArr[m][1];
                    break;
                }
            }
            for (let n = 0; n < typeObjArr.length; n++) {
                if (typeObjArr[n][0] === type) {
                    b = typeObjArr[n][1];
                    break;
                }
            }
            curSum = a * b;
            sum += curSum;
        }
        console.log(`${gamer}: ${sum}`);
    }
    
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);