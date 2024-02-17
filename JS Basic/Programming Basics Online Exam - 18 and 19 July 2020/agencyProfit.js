function agencyProfit(array) {

    let airName = array.shift();
    let adultCount = Number(array.shift());
    let kidsCount = Number(array.shift());
    let ticketAdultPrice = Number(array.shift());
    let tax = Number(array.shift());

    let ticketsKidsPrice = ticketAdultPrice * 0.30;
    let finalAdultPrice = ticketAdultPrice + tax;
    let finalKidsPrice = ticketsKidsPrice + tax;
    let fullAdult = adultCount * finalAdultPrice;
    let fullKids = kidsCount * finalKidsPrice;
    let total = (fullAdult + fullKids) * 0.20;

    console.log(`The profit of your agency from ${airName} tickets is ${total.toFixed(2)} lv.`);
    
}

agencyProfit([
    "WizzAir",
    "15",
    "5",
    "120",
    "40"
]);
agencyProfit([
    "Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"
]);
