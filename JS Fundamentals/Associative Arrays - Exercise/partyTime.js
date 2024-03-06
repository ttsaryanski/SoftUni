function partyTime(arr) {

    let list = { VIP: [], regular: [] };

    for (let curPerson of arr) {
        if (curPerson !== 'PARTY') {
            if (curPerson[0].charCodeAt(0) >= 48 && curPerson[0].charCodeAt(0) <= 57) {
                list.VIP.push(curPerson);
            } else {
                list.regular.push(curPerson);
            }
        } else {
            break;
        }
    }
    let idx = arr.indexOf('PARTY');
    let newArr = arr.slice(idx + 1);
    
    let notPresenceList = JSON.parse(JSON.stringify(list));
    let count = 0;

    for (let curPerson of list.VIP) {
        if (newArr.includes(curPerson)) {
            let i = notPresenceList.VIP.indexOf(curPerson);
            notPresenceList.VIP.splice(i, 1);
            let j = newArr.indexOf(curPerson);
            newArr.splice(j, 1);
        } else {
            count++;
        }
    }

    for (let curPerson of list.regular) {
        if (newArr.includes(curPerson)) {
            let i = notPresenceList.regular.indexOf(curPerson);
            notPresenceList.regular.splice(i, 1);
            let j = newArr.indexOf(curPerson);
            newArr.splice(j, 1);
        } else {
            count++;
        }
    }

    console.log(count);
    if (notPresenceList.VIP.length > 0) {
        console.log(`${notPresenceList.VIP.join('\n')}`);
    }
    if (notPresenceList.regular.length > 0) {
        console.log(`${notPresenceList.regular.join('\n')}`);
    }

}

partyTime([
    "7IK9Yo0h",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
    "tSzE5t0p",
    "PARTY",
    "9NoBUajQ",
    "Ce8vwPmE",
    "SVQXQCbc",
]);
partyTime([
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "xys2FYzn",
    "MDzcM9ZK",
    "PARTY",
    "2FQZT3uC",
    "dziNz78I",
    "mdSGyQCJ",
    "LjcVpmDL",
    "fPXNHpm1",
    "HTTbwRmM",
    "B5yTkMQi",
    "8N0FThqG",
    "m8rfQBvl",
    "fc1oZCE0",
    "UgffRkOn",
    "7ugX7bm0",
    "9CQBGUeJ",
]);

