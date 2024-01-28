function bikeRace(input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let traceTipe = input[2];
    let juniorsfee = 0;
    let seniorsFee = 0;
    let fee = 0;
    
    switch (traceTipe) {
        case "trail": juniorsfee = juniorsCount * 5.50; seniorsFee = seniorsCount * 7; break;
        case "cross-country": juniorsfee = juniorsCount * 8; seniorsFee = seniorsCount * 9.50; break;
        case "downhill": juniorsfee = juniorsCount * 12.25; seniorsFee = seniorsCount * 13.75; break;
        case "road": juniorsfee = juniorsCount * 20; seniorsFee = seniorsCount * 21.50; break;
    }

    fee = juniorsfee + seniorsFee;

    if (traceTipe === "cross-country" && (juniorsCount + seniorsCount) >= 50) {
        fee *= 0.75;
    }

    fee *= 0.95;
    console.log(fee.toFixed(2));
    
}

bikeRace(["10", "20", "trail"]);
bikeRace(["21", "26", "cross-country"]);
bikeRace(["30", "25", "cross-country"]);
bikeRace(["10", "10", "downhill"]);
bikeRace(["3", "40", "road"]);