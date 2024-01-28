function weatherForecast(input) {
    let forecast = (input[0]);
    if (forecast === "sunny")
    console.log("It's warm outside!");
    else
    console.log("It's cold outside!");
}
weatherForecast(["sunny"]);
weatherForecast(["cloudy"]);
weatherForecast(["snowy"]);