function softUniReception(array) {

    let desk1 = Number(array.shift());
    let desk2 = Number(array.shift());
    let desk3 = Number(array.shift());
    let people = Number(array.shift());

    let hourCount = 0;
    let peoplePerHour = desk1 + desk2 + desk3;

    while (people > 0) {
        hourCount++;
        people -= peoplePerHour;
        if (hourCount % 4 === 0) {
            hourCount++;
        }
    }

    console.log(`Time needed: ${hourCount}h.`);
    
}

softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);
