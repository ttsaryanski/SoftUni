function logistics(input) {
    let jobCount = Number(input[0]);
    let jobWeight = 0;
    let fullJobWeight = 0;

    let microbusWeight = 0;
    let truckWeight = 0;
    let trainWeight = 0;

    let microbusPrice = 0;
    let truckPrice = 0;
    let trainPrice = 0;
    let fullPrice = 0;

    for (let i = 1; i < input.length; i++) {
        jobWeight = Number(input[i]);
        if (jobWeight <= 3) {
            microbusWeight += jobWeight;
            microbusPrice = microbusWeight * 200;
        } else if (jobWeight >= 4 && jobWeight <= 11) {
            truckWeight += jobWeight;
            truckPrice = truckWeight * 175;
        } if (jobWeight >= 12) {
            trainWeight += jobWeight;
            trainPrice = trainWeight * 120;
        }
        fullJobWeight += jobWeight;
        fullPrice = microbusPrice + truckPrice + trainPrice;
    }

    console.log((fullPrice / fullJobWeight).toFixed(2));
    console.log(`${((microbusWeight / fullJobWeight) * 100).toFixed(2)}%`);
    console.log(`${((truckWeight / fullJobWeight) * 100).toFixed(2)}%`);
    console.log(`${((trainWeight / fullJobWeight) * 100).toFixed(2)}%`);
    
}

//logistics(["4", "1", "5", "16", "3"]);
logistics(["5", "2", "10", "20", "1", "7"]);