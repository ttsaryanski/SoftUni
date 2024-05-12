function katesWayOut(array) {

    let row = Number(array.shift());
    let rowCount = row;
    let maze = [];
    let exit = ' ';

    while (rowCount !== 0) {
        maze.push(array.shift().split(''));
        rowCount--;
    }

    let kateRowIndex = 0;
    let kateColIndex = 0;

    let findKate = maze.find(kate => kate.includes('k'));
    if (findKate) {
        kateRowIndex = maze.indexOf(findKate);
        kateColIndex = findKate.indexOf('k');
    }

    let isMove = true;
    let moveCount = 0;

    while (isMove === true) {

        if (kateRowIndex - 1 >= 0) {
            for (let upRowIndex = kateRowIndex - 1; upRowIndex >= 0; upRowIndex--) {
                if (maze[upRowIndex][kateColIndex] === exit) {
                    maze[upRowIndex + 1][kateColIndex] = '#';
                    kateRowIndex = upRowIndex;
                    maze[kateRowIndex][kateColIndex] = 'k';
                    moveCount++;
                } else {
                    break;
                }
                if (upRowIndex === 0) {
                    console.log(`Kate got out in ${moveCount + 1} moves`);
                    return;
                }
            }
        }

        if (kateColIndex === 0) {
            console.log(`Kate got out in ${moveCount + 1} moves`);
            return;
        } else {
            if (kateColIndex - 1 >= 0) {
                for (let leftColIndex = kateColIndex - 1; leftColIndex >= 0; leftColIndex--) {
                    if (maze[kateRowIndex][leftColIndex] === exit) {
                        maze[kateRowIndex][leftColIndex + 1] = '#';
                        kateColIndex = leftColIndex;
                        maze[kateRowIndex][kateColIndex] = 'k';
                        moveCount++;
                    } else {
                        break;
                    }
                    if (leftColIndex === 0) {
                        console.log(`Kate got out in ${moveCount + 1} moves`);
                        return;
                    }
                }
            }
        }

        if (kateRowIndex === maze.length - 1) {
            console.log(`Kate got out in ${moveCount + 1} moves`);
            return;
        } else {
            if (kateRowIndex + 1 < maze.length) {      
                for (let downRowIndex = kateRowIndex + 1; downRowIndex < maze.length; downRowIndex++) {
                    if (maze[downRowIndex][kateColIndex] === exit) {
                        maze[downRowIndex - 1][kateColIndex] = '#';
                        kateRowIndex = downRowIndex;
                        maze[kateRowIndex][kateColIndex] = 'k';
                        moveCount++;
                    } else {
                        break;
                    }
                    if (downRowIndex === maze.length - 1) {
                        console.log(`Kate got out in ${moveCount + 1} moves`);
                        return;
                    }
                }
            }
        }

        if (kateColIndex === maze[kateRowIndex].length - 1) {
            console.log(`Kate got out in ${moveCount + 1} moves`);
            return;
        } else {
            if (kateColIndex + 1 < maze[kateRowIndex].length) {
                for (let rightColIndex = kateColIndex + 1; rightColIndex < maze[kateRowIndex].length; rightColIndex++) {
                    if (maze[kateRowIndex][rightColIndex] === exit) {
                        maze[kateRowIndex][rightColIndex - 1] = '#';
                        kateColIndex = rightColIndex;
                        maze[kateRowIndex][kateColIndex] = 'k';
                        moveCount++;
                    } else {
                        break;
                    }
                    if (rightColIndex === maze[kateRowIndex].length - 1) {
                        console.log(`Kate got out in ${moveCount + 1} moves`);
                        return;
                    }
                }
            }
        }

        if ((maze[kateRowIndex - 1][kateColIndex] === '#') && (maze[kateRowIndex][kateColIndex - 1] === '#') && (maze[kateRowIndex][kateColIndex + 1] === '#') && (maze[kateRowIndex + 1][kateColIndex] === '#')) {
            isMove = false;
        }
    }
    if (isMove === false) {
        console.log('Kate cannot get out');
    }
    
    
}

// katesWayOut([
//     5,
//     "      ",
//     "      ",
//     "  k   ",
//     "      ",
//     "      "
// ]);
katesWayOut([
    4,
    "######",
    "##  k#",
    "## ###",
    "## ###"
]);
katesWayOut([
    5,
    "######",
    "##  k#",
    "## ###",
    "######",
    "## ###"
]);
