function theLift(arr) {

    let peopleCount = Number(arr[0]);
    let lift = arr[1].split(' ').map(Number);
    let capacityCab = 4;

    while (lift.some(lift => lift < capacityCab) && peopleCount > 0) {
        for (let i = 0; i < lift.length; i++) {
            let curCab = lift[i];
            while (curCab < capacityCab && peopleCount > 0) {
                curCab++;
                peopleCount--;
            }
            lift[i] = curCab;
        }
    }

    if (peopleCount === 0 && lift[lift.length - 1] < capacityCab) {
        console.log(`The lift has empty spots!
${lift.join(' ')}`);
    } else if (peopleCount > 0 && lift[lift.length - 1] === capacityCab) {
        console.log(`There isn't enough space! ${peopleCount} people in a queue!
${lift.join(' ')}`);
    } else if (peopleCount === 0 && lift[lift.length - 1] === capacityCab) {
        console.log(lift.join(' '));
    }

}

theLift(["15", "0 0 0 0"]);
theLift(["20", "0 2 0"]);
