function timeToWalk(stepsCount, stepsLengtInMeters, speed) {

    let distanceInMeters = stepsCount * stepsLengtInMeters;
    let breaksTimeSec = Math.floor(distanceInMeters / 500) * 60;
    let time = Math.round(distanceInMeters / (speed / 3.6)) + breaksTimeSec;

    let sec = time % 60;
    let min = Math.floor(time / 60);
    let hours = Math.floor(time / 60 / 60);

    let secPrint = sec < 10 ? `0${sec}` : `${sec}`;
    let minPrint = min < 10 ? `0${min}` : `${min}`;
    let hoursPrint = hours < 10 ? `0${hours}` : `${hours}`;

    console.log(`${hoursPrint}:${minPrint}:${secPrint}`);

    
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
