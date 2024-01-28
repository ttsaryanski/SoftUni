function sleepyTomCat(input) {
    let deyoffDay = Number(input[0]);
    let workDay = 365 - deyoffDay;
    let minutesGamingInDeyoff = deyoffDay * 127;
    let minutesGamingInWorkDay = workDay * 63;
    let allMinutesInGaming = minutesGamingInDeyoff + minutesGamingInWorkDay;
    

    if (allMinutesInGaming < 30000) {
        console.log(`Tom sleeps well`);
        timeInHour = Math.floor((30000 - allMinutesInGaming) / 60);
        timeInMin = (30000 - allMinutesInGaming) % 60;
            console.log(`${timeInHour} hours and ${timeInMin} minutes less for play`);
    } else {
        console.log(`Tom will run away`);
        timeInHour = Math.floor((allMinutesInGaming - 30000) / 60);
        timeInMin = (allMinutesInGaming - 30000) % 60;
            console.log(`${timeInHour} hours and ${timeInMin} minutes more for play`);
    }
   

}

sleepyTomCat(["20"]);
sleepyTomCat(["113"]);