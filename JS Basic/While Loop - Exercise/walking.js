function walking(input) {
    let sum = 0;

    let i = 0;
    let command = input[i];
    while (command !== "Going home") {
        let steps = Number(input[i]);
        sum += steps;
        if (sum >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - 10000} steps over the goal!`);
            break;
        }
        i++;
        command = input[i];
    }
    if (command === "Going home") {
        i++;
        let stepHome = Number(input[i]);
        sum += stepHome;
    
        if (sum < 10000) {
            console.log(`${10000 - sum} more steps to reach goal.`);
        }

        if (sum >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - 10000} steps over the goal!`);
        }
    }
    
}

walking(["1000",
"1500",
"2000",
"6500"]);

// walking(["1500",
// "3000",
// "250",
// "1548",
// "2000",
// "Going home",
// "2000"]);

// walking(["1500",
// "300",
// "2500",
// "3000",
// "Going home",
// "200"]);

// walking(["125",
// "250",
// "4000",
// "30",
// "2678",
// "4682"]);