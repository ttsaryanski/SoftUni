function thePianist(array) {

    let collectionArr = [];
    let pieceObj = {};
    let collectionArrLength = Number(array.shift());
    let curRow = array.shift();

    while (collectionArrLength > 0) {
        let [pieceName, composerName, keys] = curRow.split('|');
        
        pieceObj = { pieceName, composerName, keys };
        collectionArr.push(pieceObj);
        
        collectionArrLength--;
        curRow = array.shift();
    }

    while (curRow !== 'Stop') {
        let commands = curRow.split('|');
        let command = commands[0];
        if (command === 'Add') {
            let pieceName = commands[1];
            let composerName = commands[2];
            let keys = commands[3];

            let findPiece = collectionArr.find(el => el.pieceName === pieceName);

            if (findPiece) {
                console.log(`${pieceName} is already in the collection!`);
            } else {
                pieceObj = { pieceName, composerName, keys };
                collectionArr.push(pieceObj);
                console.log(`${pieceName} by ${composerName} in ${keys} added to the collection!`);
            }
        } else if (command === 'Remove') {
            let pieceName = commands[1];

            let findPiece = collectionArr.find(el => el.pieceName === pieceName);
            let idx = collectionArr.indexOf(findPiece);

            if (findPiece) {
                collectionArr.splice(idx, 1);
                console.log(`Successfully removed ${pieceName}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            let pieceName = commands[1];
            let newKeys = commands[2];

            let findPiece = collectionArr.find(el => el.pieceName === pieceName);
            let idx = collectionArr.indexOf(findPiece);

            if (findPiece) {
                collectionArr[idx].keys = newKeys;
                console.log(`Changed the key of ${pieceName} to ${newKeys}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }

        curRow = array.shift();
    }
    
    collectionArr.forEach(e => console.log(`${e.pieceName} -> Composer: ${e.composerName}, Key: ${e.keys}`));
    
}

// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);
