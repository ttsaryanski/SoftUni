function ticTacToe(input) {

    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    let curPlayer = 'X';

    for (let token of input) {
        let [k, l] = token.split(' ').map(Number);
        if (dashboard[k][l] === false) {
            dashboard[k][l] = curPlayer;
            if (checkWin(curPlayer)) {
                console.log(`Player ${curPlayer} wins!`);
                dashboard.forEach(el => {
                    console.log(el.join('\t'));
                });
                return;
            }
            if (checkDashboard()) {
                console.log('The game ended! Nobody wins :(');
                dashboard.forEach(el => {
                    console.log(el.join('\t'));
                });
                return;
            }
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        curPlayer = curPlayer === 'X' ? 'O' : 'X';
    }

    function checkDashboard() {
        for (let row of dashboard) {
            if (row.includes(false)) {
                return false;
            }
        }
        return true;
    }


    function checkWin(curPlayer) {
        for (let i = 0; i < 3; i++) {
            if (dashboard[i][0] === curPlayer &&
                dashboard[i][1] === curPlayer &&
                dashboard[i][2] === curPlayer) {
                return true;
            } else if (dashboard[0][i] === curPlayer &&
                       dashboard[1][i] === curPlayer &&
                       dashboard[2][i] === curPlayer) {
                return true;
            } else if (dashboard[0][0] === curPlayer &&
                       dashboard[1][1] === curPlayer &&
                       dashboard[2][2] === curPlayer) {
                return true;
            } else if (dashboard[0][2] === curPlayer &&
                       dashboard[1][1] === curPlayer &&
                       dashboard[2][0] === curPlayer) {
                return true;
            }
        }
        
        return false;
    }


}

ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);
ticTacToe([
    "0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
]);
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);
