function cinemaTickets(input) {
    let finalTicket = 0;
    let finalStudentTicket = 0;
    let finalStandardTicket = 0;
    let finalKidTicket = 0;

    let command = input[0];
    let index = 1;

    while (command !== "Finish") {
        let movieName = command;
        let freeTicket = Number(input[index]);
        let totalTicketCount = 0;
        let studentTicket = 0;
        let standardTicket = 0;
        let kidTicket = 0;

        index++;
        let ticketTipe = input[index];
        index++;

        while (ticketTipe !== "End") {
            if (ticketTipe === "student") {
                studentTicket++;
                finalStudentTicket++;
                totalTicketCount++;
                finalTicket++;
            } else if (ticketTipe === "standard") {
                standardTicket++;
                finalStandardTicket++;
                totalTicketCount++;
                finalTicket++;
            } else if (ticketTipe === "kid") {
                kidTicket++;
                finalKidTicket++;
                totalTicketCount++;
                finalTicket++;
            }
            if (totalTicketCount >= freeTicket) {
                let percentTicket = (totalTicketCount / freeTicket) * 100;
                console.log(`${movieName} - ${percentTicket.toFixed(2)}% full.`);
                command = input[index];
                index++;
                break;
            }
            ticketTipe = input[index];
            index++;
        }
        if (ticketTipe === "End") {
            let percentTicket = (totalTicketCount / freeTicket) * 100;
            console.log(`${movieName} - ${percentTicket.toFixed(2)}% full.`);
            command = input[index];
            index++;
            }
    }
    if (command === "Finish") {
        let avgStudentTicket = (finalStudentTicket / finalTicket) * 100;
        let avgStandardTicket = (finalStandardTicket / finalTicket * 100);
        let avgKidTicket = (finalKidTicket / finalTicket) * 100;
        console.log(`Total tickets: ${finalTicket}`);
        console.log(`${avgStudentTicket.toFixed(2)}% student tickets.`);
        console.log(`${avgStandardTicket.toFixed(2)}% standard tickets.`);
        console.log(`${avgKidTicket.toFixed(2)}% kids tickets.`);
    }
}

cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);

// cinemaTickets(["The Matrix",
// "20",
// "student",
// "standard",
// "kid",
// "kid",
// "student",
// "student",
// "standard",
// "student",
// "End",
// "The Green Mile",
// "17",
// "student",
// "standard",
// "standard",
// "student",
// "standard",
// "student",
// "End",
// "Amadeus",
// "3",
// "standard",
// "standard",
// "standard",
// "Finish"]);