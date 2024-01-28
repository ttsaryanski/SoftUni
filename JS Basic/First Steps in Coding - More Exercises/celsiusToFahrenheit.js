function celsiusToFahrenheit(input) {
    let C = Number(input[0]);
    let F = (C * 9 / 5 + 32).toFixed(2);
    console.log(F);
}
celsiusToFahrenheit([25]);
celsiusToFahrenheit([0]);
celsiusToFahrenheit([-5.5]);
celsiusToFahrenheit([32.3]);