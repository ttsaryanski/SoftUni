function trekkingMania(input) {
    let groupCount = Number(input[0]);

    let musalaGroup = 0;
    let monblanGroup = 0;
    let kilimandjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;

    let fullPeople = 0;

    for (let index = 1; index < input.length; index++) {
        peopleInGroup = Number(input[index]);

        if (peopleInGroup <= 5) {
            musalaGroup += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            monblanGroup += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kilimandjaroGroup += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2Group += peopleInGroup;
        } else {
            everestGroup += peopleInGroup;
        }
    }

    fullPeople = musalaGroup + monblanGroup + kilimandjaroGroup + k2Group + everestGroup;
    
    console.log(`${((musalaGroup / fullPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblanGroup / fullPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaroGroup / fullPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2Group / fullPeople) * 100).toFixed(2)}%`);
    console.log(`${((everestGroup / fullPeople) * 100).toFixed(2)}%`);
    
}

// trekkingMania([
// "10",
// "10",
// "5",
// "1",
// "100",
// "12",
// "26",
// "17",
// "37",
// "40",
// "78"]);

trekkingMania([
"5",
"25",
"41",
"31",
"250",
"6"]);