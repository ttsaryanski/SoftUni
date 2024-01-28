function skeleton(input) {
    let targetMin = Number(input[0]);
    let targetSec = Number(input[1]);
    let targetLength = Number(input[2]);
    let time100 = Number(input[3]);

    let targetTime = (targetMin * 60) + targetSec;
    let timeForLength = (targetLength / 100) * time100;
    let badTime = (targetLength / 120) * 2.5;
    let finalTime = timeForLength - badTime;

    if (finalTime <= targetTime) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${finalTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(finalTime - targetTime).toFixed(3)} second slower.`);
    }
    
}

// skeleton(["2",
// "12",
// "1200",
// "10"]);

skeleton(["1",
"20",
"1546",
"12"]);