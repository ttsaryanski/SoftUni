function movingTarget(array) {

    let targetsList = array.shift().split(' ').map(Number);
    let token = array.shift();

    while (token !== 'End') {
        let [command, index, num] = token.split(' ');
        index = Number(index);
        num = Number(num);
        switch (command) {
            case 'Shoot':
                if (index >= 0 && index < targetsList.length) {
                    targetsList[index] -= num;
                }
                if (targetsList[index] <= 0) {
                    targetsList.splice(index, 1);
                }
                break;
            case 'Add':
                if (index >= 0 && index < targetsList.length) {
                    targetsList.splice(index, 0, num);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                if (index - num >= 0 && index + num < targetsList.length) {
                    targetsList.splice(index - num, num * 2 + 1)
                } else {
                    console.log('Strike missed!');
                }
                break;
        }
        token = array.shift()
    }
    if (token === 'End') {
        console.log(targetsList.join('|'));
    }
    
}

movingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]);
movingTarget([
    "1 2 3 4 5",
    "Strike 0 1",
    "End"
]);
