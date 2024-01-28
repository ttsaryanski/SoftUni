function truckDriver(input) {
    let season = input[0];
    let kmPerMount = Number(input[1]);

    let moneyPerMount = 0;
    let salary = 0;

    if (kmPerMount <= 5000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                moneyPerMount = kmPerMount * 0.75;
                break;
            case "Summer":
                moneyPerMount = kmPerMount * 0.90;
                break;
            case "Winter":
                moneyPerMount = kmPerMount * 1.05;
                break;
        }
    }

    if (kmPerMount > 5000 && kmPerMount <= 10000) {
        switch (season) {
            case "Spring":
            case "Autumn":
                moneyPerMount = kmPerMount * 0.95;
                break;
            case "Summer":
                moneyPerMount = kmPerMount * 1.10;
                break;
            case "Winter":
                moneyPerMount = kmPerMount * 1.25;
                break;
        }
    }

    if (kmPerMount > 10000 && kmPerMount <= 20000) {
        moneyPerMount = kmPerMount * 1.45;
    }

    salary = (moneyPerMount * 4) * 0.90;
    console.log(salary.toFixed(2));


    
}

truckDriver(["Summer", "3455"]);
truckDriver(["Winter", "4350"]);
truckDriver(["Spring", "1600"]);
truckDriver(["Winter", "5678"]);
truckDriver(["Autumn", "8600"]);
truckDriver(["Winter", "16042"]);
truckDriver(["Spring", "16942"]);