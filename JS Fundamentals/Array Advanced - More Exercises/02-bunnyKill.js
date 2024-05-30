function bunnyKill(array) {
    let bombs = array.pop().split(" ");
    let sum = 0;
    let count = 0;
    let hangar = [];
    for (let row of array) {
        row = row.split(" ").map(Number);
        hangar.push(row);
    }
    for (let i = 0; i < bombs.length; i++) {
        let curBomb = bombs[i];
        let bunnyWithBomb = curBomb.split(",").map(Number);
        let m = bunnyWithBomb[0];
        let n = bunnyWithBomb[1];
        if (m >= 0 && n < hangar[m].length) {
            if (hangar[m][n] > 0) {
                count++;
                let damage = hangar[m][n];
                sum += damage;
                for (let idx1 = m - 1; idx1 <= m + 1; idx1++) {
                    for (let idx2 = n - 1; idx2 <= n + 1; idx2++) {
                        if (isValid(idx1, idx2)) {
                            hangar[idx1][idx2] -= damage;
                            if (hangar[idx1][idx2] < 0) {
                                hangar[idx1][idx2] = 0;
                            }
                        }
                    }
                }
                function isValid(a, b) {
                    return a >= 0 && a < hangar.length && b >= 0 && b < hangar[a].length;
                }
                function boom(row, col) {
                    let value = hangar[row][col] - damage;
                    if (value < 0) {
                        value = 0;
                    }
                    return value;
                }
            }
        }
    }
    for (let k = 0; k < hangar.length; k++) {
        for (let l = 0; l < hangar[k].length; l++) {
            let curPosition = hangar[k][l];
            if (curPosition > 0) {
                count++;
                sum += curPosition;
            }
        }
    }
    console.log(sum);
    console.log(count);
}

bunnyKill(["10 10 10", "10 10 10", "10 10 10", "0,0"]);
bunnyKill([
    "5 10 15 20",
    "10 10 10 10",
    "10 15 10 10",
    "10 10 10 10",
    "2,2 0,1",
]);
