function tennisEquipment(input) {
    let racketPrice = Number(input[0]);
    let racketCount = Number(input[1]);
    let sneakersCount = Number(input[2]);

    let fullRacketPrice = racketCount * racketPrice;
    let fullSneakersPrice = sneakersCount * (racketPrice / 6);
    let otherPrice = 0.20 * (fullRacketPrice + fullSneakersPrice);
    let totalPrice = fullRacketPrice + fullSneakersPrice + otherPrice;

    console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil((totalPrice / 8) * 7)}`);
    
}

tennisEquipment(["850", "4", "2"]);
tennisEquipment(["386", "7", "4"]);