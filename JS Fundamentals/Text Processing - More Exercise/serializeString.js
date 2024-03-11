function serializeString(array) {

    let letterObj = {};
    let strArr = array[0].split('');
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] in letterObj) {
            letterObj[strArr[i]].push(i);
        } else {
            letterObj[strArr[i]] = [i];
        }
    }
    let letterObjArr = Object.entries(letterObj);
    for (let [letter, indexes] of letterObjArr) {
        console.log(`${letter}:${indexes.join('/')}`);
    }
    
}

serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);
