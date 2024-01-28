function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    let timeExamInMin = (hourExam * 60) + minExam;
    let timeArrivalInMin = (hourArrival * 60) + minArrival;

    let position = "";

    let minDelay = 0;
    let minEarly = 0;

    if (timeArrivalInMin < (timeExamInMin - 30)) {
        position = "Early";
        minEarly = timeExamInMin - timeArrivalInMin;
        console.log(position);
    } else if (timeArrivalInMin > timeExamInMin) {
        position = "Late";
        minDelay = timeArrivalInMin - timeExamInMin;
        console.log(position);
    } else {
        position = "On time";
        minEarly = timeExamInMin - timeArrivalInMin;
        console.log(position);
    }

    switch (position) {
        case "Late":
            if (minDelay < 60) {
                console.log(`${minDelay} minutes after the start`);
            } else {
                let hourDelay = minDelay / 60;
                let minutesDelay = minDelay % 60;
                if (minutesDelay < 10) {
                    console.log(`${Math.floor(hourDelay)}:0${minutesDelay} hours after the start`);
                } else {
                console.log(`${Math.floor(hourDelay)}:${minutesDelay} hours after the start`);
                }
            }
            break;

        case "Early":
            if (minEarly < 60) {
                console.log(`${minEarly} minutes before the start`);
            } else if (minEarly === 60) {
                let hoursEarly = minEarly / 60;
                let minutesEarly = 0;
                console.log(`${Math.floor(hoursEarly)}:0${minutesEarly} hours before the start`);
            } else if (minEarly >= 60) {
                let hoursEarly = minEarly / 60;
                let minutesEarly = minEarly % 60;
                    if (minutesEarly < 10) {
                        console.log(`${Math.floor(hoursEarly)}:0${minutesEarly} hours before the start`);
                    } else {
                        console.log(`${Math.floor(hoursEarly)}:${minutesEarly} hours before the start`);
                    }
            }
            break;

        case "On time":
            if (minEarly < 60 && minEarly !== 0) {
                console.log(`${minEarly} minutes before the start`);
            } else if (minEarly >= 60) {
                let hoursEarly = minEarly / 60;
                let minutesEarly = minEarly % 60;
                    if (minutesEarly < 10) {
                    console.log(`${Math.floor(hoursEarly)}:0${minutesEarly} hours before the start`);
                } else {
                    console.log(`${Math.floor(hoursEarly)}:${minutesEarly} hours before the start`);
                
                }
            }
            if (minEarly === 0) {
                console.log();
            }
            break;

    }
}

onTimeForTheExam(["9", "30", "9", "50"]);
onTimeForTheExam(["9", "00", "8", "30"]);
onTimeForTheExam(["16", "00", "15", "00"]);
onTimeForTheExam(["9", "00", "10", "30"]);
onTimeForTheExam(["14", "00", "13", "55"]);
onTimeForTheExam(["11", "30", "8", "12"]);
onTimeForTheExam(["10", "00", "10", "00"]);
onTimeForTheExam(["11", "30", "10", "55"]);
onTimeForTheExam(["11", "30", "12", "29"])