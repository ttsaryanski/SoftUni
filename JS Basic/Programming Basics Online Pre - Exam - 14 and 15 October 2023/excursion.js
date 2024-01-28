function excursion(input) {
    let peopleCount = Number(input[0]);
    let nigthCount = Number(input[1]);
    let transportCardCount = Number(input[2]);
    let museumTicketCount = Number(input[3]);
    let totalPrice = 0;

    let nightPriceOnePeople = nigthCount * 20;
    let transportCardPriceOnePeople = transportCardCount * 1.60;
    let museumTicketPriceOnePeople = museumTicketCount * 6;
    let totalPriceOnePeople = (nightPriceOnePeople + transportCardPriceOnePeople + museumTicketPriceOnePeople) * 1.25;

    totalPrice = totalPriceOnePeople * peopleCount;

    console.log(totalPrice.toFixed(2));
    
}

excursion(["20",
"14",
"30",
"6"]);

excursion(["131",
"9",
"33",
"46"]);