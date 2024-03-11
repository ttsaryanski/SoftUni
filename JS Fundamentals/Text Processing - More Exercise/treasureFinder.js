function treasureFinder(arr) {

    let key = arr.shift().split(' ').map(Number);
    let row = arr.shift();
    while (row !== 'find') {
        let cryptedArr = row.split('');
        let idx = 0;
        for (let i = 0; i < cryptedArr.length; i++) {
            let letter = cryptedArr[i];
            letter = letter.charCodeAt() - key[idx];
            letter = String.fromCharCode(letter);
            cryptedArr[i] = letter;
            idx++;
            if (idx >= key.length) {
                idx = 0;
            }
        }
        let decryptedMessage = cryptedArr.join('').split('&');
        let treasureType = decryptedMessage[1];
        let coordinates = decryptedMessage[2];
        let startIdx = coordinates.indexOf('<');
        let endIdx = coordinates.indexOf('>');
        coordinates = coordinates.slice(startIdx + 1, endIdx);

        console.log(`Found ${treasureType} at ${coordinates}`);
        
        row = arr.shift();
    }
    
}

treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);
