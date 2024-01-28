function oscarsCeremony(input) {
    let arenaRentPrice = Number(input[0]);
        let statuettePrice = arenaRentPrice * 0.70;
        let cateringPrice = statuettePrice * 0.85;
        let musicPrice = cateringPrice * 0.5;

        console.log((arenaRentPrice + statuettePrice + cateringPrice + musicPrice).toFixed(2));

}

oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);
