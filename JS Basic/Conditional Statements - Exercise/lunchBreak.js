function lunchBreak(input) {
    let seriesName = (input[0]);
    let seriesTime = Number(input[1]);
    let breakTime = Number(input[2]);
    let lunchTime = breakTime / 8;
    let relaxTime = breakTime / 4;
    let freeTime = breakTime - lunchTime - relaxTime;
    if (freeTime >= seriesTime) {
        let uperTime = Math.ceil(freeTime - seriesTime);
        console.log(`You have enough time to watch ${seriesName} and left with ${uperTime} minutes free time.`)
    }
    else {
        let needTime = Math.ceil(seriesTime - freeTime);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${needTime} more minutes.`)
    }
}
lunchBreak(["Game of Thrones", "60", "96"]);
lunchBreak(["Teen Wolf", "48", "60"]);