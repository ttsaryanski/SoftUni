function foodDelivery(input) {
    let chikenFoodPrice = Number(input[0]) * 10.35;
    let fishFoodPrice = Number(input[1]) * 12.40;
    let veganFoodprice = Number(input[2]) * 8.15;
    let dessertPrice = (chikenFoodPrice +fishFoodPrice + veganFoodprice) * 0.2;
    let allPrice = chikenFoodPrice + fishFoodPrice + veganFoodprice + dessertPrice + 2.50;
    console.log(allPrice);
}
foodDelivery(["2", "4", "3"])
foodDelivery(["9", "2", "6"])