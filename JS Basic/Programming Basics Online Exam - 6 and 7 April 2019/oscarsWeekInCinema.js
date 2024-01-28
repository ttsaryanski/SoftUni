function oscarsWeekInCinema(input) {
    let movieName = input[0];
    let arenaType = input[1];
    let ticketCount = Number(input[2]);

    let fullMoney = 0;

    switch (movieName) {
        case "A Star Is Born":
            if (arenaType === "normal") {
                fullMoney = ticketCount * 7.50;
            } else if (arenaType === "luxury") {
                fullMoney = ticketCount * 10.50;
            } else if (arenaType === "ultra luxury") {
                fullMoney = ticketCount * 13.50;
            }
            break;
        case "Bohemian Rhapsody":
            if (arenaType === "normal") {
                fullMoney = ticketCount * 7.35;
            } else if (arenaType === "luxury") {
                fullMoney = ticketCount * 9.45;
            } else if (arenaType === "ultra luxury") {
                fullMoney = ticketCount * 12.75;
            }
            break;
        case "Green Book":
            if (arenaType === "normal") {
                fullMoney = ticketCount * 8.15;
            } else if (arenaType === "luxury") {
                fullMoney = ticketCount * 10.25;
            } else if (arenaType === "ultra luxury") {
                fullMoney = ticketCount * 13.25;
            }
            break;
        case "The Favourite":
            if (arenaType === "normal") {
                fullMoney = ticketCount * 8.75;
            } else if (arenaType === "luxury") {
                fullMoney = ticketCount * 11.55;
            } else if (arenaType === "ultra luxury") {
                fullMoney = ticketCount * 13.95;
            }
            break;
    }
    console.log(`${movieName} -> ${fullMoney.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born",
"luxury",
"42"]);

oscarsWeekInCinema(["Green Book",
"normal",
"63"]);