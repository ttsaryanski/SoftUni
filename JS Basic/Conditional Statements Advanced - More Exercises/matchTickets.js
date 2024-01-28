function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let peapleInGroup = Number(input[2]);
    let transportPrice = 0;
    let moneyForTicket = 0;
    let oneTicketPrice = 0;
    let fullTicketPrice = 0;

    switch (category) {
        case "Normal": oneTicketPrice = 249.99; break
        case "VIP": oneTicketPrice = 499.99; break;
    }

    fullTicketPrice = peapleInGroup * oneTicketPrice;

    if (peapleInGroup <= 4) {
        transportPrice = budget * 0.75;
    } else if (peapleInGroup <= 9) {
        transportPrice = budget * 0.60;
    } else if (peapleInGroup <= 24) {
        transportPrice = budget * 0.50;
    } else if (peapleInGroup <= 49) {
        transportPrice = budget * 0.40;
    } else {
        transportPrice = budget * 0.25;
    }

    moneyForTicket = budget - transportPrice;

    if (moneyForTicket >= fullTicketPrice) {
        console.log(`Yes! You have ${(moneyForTicket - fullTicketPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(fullTicketPrice - moneyForTicket).toFixed(2)} leva.`);
    }
    
}

//matchTickets(["1000", "Normal", "1"]);
matchTickets(["30000", "VIP", "49"]);