function worldSwimmingRecord(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeFromMeter = Number(input[2]);
    let clearTime = distance * timeFromMeter;
    let badTime = Math.floor(distance / 15) * 12.5;
    let fullTime = (clearTime + badTime).toFixed(2);
    if (worldRecord > fullTime) {
        console.log(`Yes, he succeeded! The new world record is ${fullTime} seconds.`)
    }  
    else {
        let timeNeed = (fullTime - worldRecord).toFixed(2);
        console.log(`No, he failed! He was ${timeNeed} seconds slower.`);
}
}
worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);