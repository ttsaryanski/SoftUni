function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let totalTime = hour * 60 + minutes + 15;
    let totalTimeHour = Math.floor(totalTime / 60);
    if (totalTimeHour === 24) {
        totalTimeHour = 0;
    }
    let totalTimeMinutes = totalTime % 60;
    if (totalTimeMinutes < 10) {
        console.log(`${totalTimeHour}:0${totalTimeMinutes}`);
    } else {
        console.log(`${totalTimeHour}:${totalTimeMinutes}`);
    }

}
timePlus15Minutes(["1", "46"]);
timePlus15Minutes(["0", "01"]);
timePlus15Minutes(["23", "59"]);
timePlus15Minutes(["11", "08"]);
timePlus15Minutes(["12", "49"]);