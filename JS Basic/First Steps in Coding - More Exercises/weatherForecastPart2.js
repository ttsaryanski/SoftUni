function weatherForecast(input) {
    let degrees = Number(input[0]);
    if (degrees >= 5.00 && degrees <= 11.9) {
        console.log("Cold");
    } else if (degrees >= 12.00 && degrees <= 14.9) {
        console.log("Cool");
    } else if (degrees >= 15.00 && degrees <= 20.00) {
        console.log("Mild");
    } else if (degrees >= 20.1 && degrees <= 25.9) {
        console.log("Warm");
    } else if (degrees >= 26.00 && degrees <= 35.00) {
        console.log("Hot");
    } else {
        console.log("unknown");
    }
}
weatherForecast(["16.5"]);
weatherForecast(["8"]);
weatherForecast(["22.4"]);
weatherForecast(["26"]);
weatherForecast(["0"]);