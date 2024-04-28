function zadacha8(array) {
 
    let travelDestinations = {};
 
    for (let row of array) {
        let [country, city, travelCost] = row.split(' > ');
        travelCost = Number(travelCost);
 
        if (country in travelDestinations) {
            let foundTown = travelDestinations[country].find(town => town[0] === city);
            if (foundTown) {
                // you should keep the cheapest offer
                // foundTown[1] > travelCost - това е най-голямата ти грешка - това е проверка!!!
                if (foundTown[1] > travelCost) {
                foundTown[1] = travelCost;
                }
 
            } else {
                //ако има държава вече но към нея се добавят още по един път град и пари
                travelDestinations[country].push([city, travelCost]);
            }
        } else {
            //за нова държава, град, и пари
            travelDestinations[country] = [[city, travelCost]];
 
        }       
    }
    let entries = Object.entries(travelDestinations).sort((a, b) => a[0].localeCompare(b[0]))
    //сортира по азбучен ред градовете - не е по градове а по имена на държави!!!
    let finalStr = ''; // това са магии :) - лъжем условието за отпечатването, правим стринг и после конкатенираме с каквото е нужно
    for (let [country, travel] of entries) {
        finalStr = `${country} ->`; // магия 1 - това ще печатаме първо
        let sortedTravelCost = travel.sort((a, b) => a[1] - b[1]);
        // опитвам се да сортирам по "then sort by lowest Travel cost."
        for (let [city, cost] of sortedTravelCost) {
            finalStr += ` ${city} -> ${cost}`; // това е конкатенацията - ще стане в един ред горното с това
        }   
        console.log(finalStr);  // принтираме магията
    }

}
 
zadacha8([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
zadacha8([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);