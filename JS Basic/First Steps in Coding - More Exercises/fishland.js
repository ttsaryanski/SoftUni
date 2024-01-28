function fishland(input) {
    let mackerelPrice = Number(input[0]);
    let spratPrice = Number(input[1]);
    let bonitoPrice = mackerelPrice + (mackerelPrice * 0.60);
    let allBonitoPrice = bonitoPrice * (input[2]);
    let safridPrice = spratPrice + (spratPrice * 0.80);
    let allSafridPrice = safridPrice * (input[3]);
    let allMusselsPrice = (input[4]) * 7.50;
    let allPrice = (allBonitoPrice + allSafridPrice + allMusselsPrice).toFixed(2);
    console.log(allPrice);
}
fishland([6.90, 4.20, 1.5, 2.5, 1]);
fishland([5.55, 3.57, 4.3, 3.6, 7]);