function heartDelivery(array) {

    let arr = array.shift().split('@').map(Number);
    let token = array.shift();

    let startIdx = 0;
    while (token !== 'Love!') {
        let commands = token.split(' ');
        let idx = startIdx + Number(commands[1]);

        if (idx >= 0 && idx < arr.length) {
            if (arr[idx] === 0) {
                console.log(`Place ${idx} already had Valentine's day.`);
            } else {
                arr[idx] -= 2;
                if (arr[idx] === 0) {
                    console.log(`Place ${idx} has Valentine's day.`);
                }
            }
        }
        if (idx >= arr.length) {
            idx = 0;
            if (arr[idx] === 0) {
                console.log(`Place ${idx} already had Valentine's day.`);
            } else {
                arr[idx] -= 2;
                if (arr[idx] === 0) {
                    console.log(`Place ${idx} has Valentine's day.`);
                }
            }
        }

        startIdx = idx;
        token = array.shift();
    }
    if (token === 'Love!') {
        console.log(`Cupid's last position was ${startIdx}.`);

        let endArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                endArr.push(arr[i]);
            }
        }
        if (endArr.length > 0) {
            console.log(`Cupid has failed ${endArr.length} places.`);
        } else {
            console.log(`Mission was successful.`);
        }
    }

}

// heartDelivery([
//     "10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"
// ]);
// heartDelivery([
//     "2@4@2",
//     "Jump 2",
//     "Jump 2",
//     "Jump 8",
//     "Jump 3",
//     "Jump 1",
//     "Love!"
// ]);
heartDelivery([
    "4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"
]);
