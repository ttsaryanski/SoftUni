function memoryGame(array) {

    let gameZone = array.shift().split(' ');
    let movesCount = 0;
    
    for (let command of array) {
        if (command !== 'end') {
            let token = command.split(' ').map(Number);
            let idx1 = token[0];
            let idx2 = token[1];
            if (idx1 < 0 || idx1 > gameZone.length - 1 || idx2 < 0 || idx2 > gameZone.length - 1 || idx1 === idx2) {
                let averageIdx = Math.trunc(gameZone.length / 2);
                gameZone.splice(averageIdx, 0, `-${movesCount + 1}a`);
                gameZone.splice(averageIdx, 0, `-${movesCount + 1}a`);
                movesCount++;
                console.log('Invalid input! Adding additional elements to the board');
            } else {
                if (gameZone[idx1] === gameZone[idx2]) {
                    let element = gameZone[idx1];
                    let idxToRemove = token.sort((a, b) => b - a);
                    for (let i of idxToRemove) {
                        gameZone.splice(i, 1);
                    }
                    movesCount++;
                    console.log(`Congrats! You have found matching elements - ${element}!`);
                } else {
                    console.log('Try again!');
                    movesCount++
                }
            }
            if (gameZone.length === 0) {
                console.log(`You have won in ${movesCount} turns!`);
                return;
            }
        }

        if (command === 'end') {
            console.log(`Sorry you lose :(
${gameZone.join(' ')}`);
        }
    }

}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
//memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
//memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
