function race(arr) {

    let listWithRacersArr = arr.shift().split(', ');
    let racersObj = {};

    for (let curRacer of listWithRacersArr) {
        racersObj[curRacer] = 0;
    }

    let patternForName = /[A-Za-z]/g;
    let patternForDistance = /\d/g;
    for (let row of arr) {
        if (row !== 'end of race') {
            let name = row.match(patternForName).join('');
            let distance = 0;
            let distanceArr = row.match(patternForDistance);
            distanceArr.forEach(element => distance += Number(element));
            if (name in racersObj) {
                racersObj[name] += distance;
            }
        }
    }
    let sortedArr = Object.entries(racersObj).sort((a, b) => b[1] - a[1]).slice(0,3);
    console.log(`1st place: ${sortedArr[0][0]}`);
    console.log(`2nd place: ${sortedArr[1][0]}`);
    console.log(`3rd place: ${sortedArr[2][0]}`);
    
}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
race([
    'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);
