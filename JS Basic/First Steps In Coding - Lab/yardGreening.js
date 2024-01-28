function yardGreening(input) {
    let allM2 = Number(input[0]);
    let priceFromAllGarden = allM2 * 7.61;
    let alldiscount = priceFromAllGarden * 0.18;
    let finalPrice = 'The final price is: ' + (priceFromAllGarden - alldiscount) + ' lv.';
    let discount = 'The discount is: ' + alldiscount + ' lv.';
    console.log(finalPrice);
    console.log(discount);
}
yardGreening(["550"]);
yardGreening(["150"]);