function schoolCamp(input) {
    let season = input[0];
    let tipeGroup = input[1];
    let studentCount = Number(input[2]);
    let sleepingCount = Number(input[3]);

    let price = 0;
    let sport = "";

    switch (tipeGroup) {
        case "boys":
        case "girls":
            if (season === "Winter") {
                price = studentCount * sleepingCount * 9.60;
            } else if (season === "Spring") {
                price = studentCount * sleepingCount * 7.20;
            } else if (season === "Summer") {
                price = studentCount * sleepingCount * 15;
            }
            break;
        case "mixed":
            if (season === "Winter") {
                price = studentCount * sleepingCount * 10;
            } else if (season === "Spring") {
                price = studentCount * sleepingCount * 9.50;
            } else if (season === "Summer") {
                price = studentCount * sleepingCount * 20;
            }
            break;
    }

    if (studentCount >= 50) {
        price *= 0.50;
    } else if (studentCount >= 20 && studentCount < 50) {
        price *= 0.85;
    } else if (studentCount >= 10 && studentCount < 20) {
        price *= 0.95;
    }
    
    switch (tipeGroup) {
        case "girls":
            if (season === "Winter") {
                sport = "Gymnastics";
            } else if (season === "Spring") {
                sport = "Athletics";
            } else if (season === "Summer") {
                sport = "Volleyball";
            }
            break;
        case "boys":
            if (season === "Winter") {
                sport = "Judo";
            } else if (season === "Spring") {
                sport = "Tennis";
            } else if (season === "Summer") {
                sport = "Football";
            }
            break;
        case "mixed":
            if (season === "Winter") {
                sport = "Ski";
            } else if (season === "Spring") {
                sport = "Cycling";
            } else if (season === "Summer") {
                sport = "Swimming";
            }
            break;
    }

    console.log(`${sport} ${price.toFixed(2)} lv.`);

}

schoolCamp(["Spring", "girls", "20", "7"]);
schoolCamp(["Winter", "mixed", "9", "15"]);
schoolCamp(["Summer", "boys", "60", "7"]);
schoolCamp(["Spring", "mixed", "17", "14"]);