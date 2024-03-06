function travelTime(array) {

    let travelList = {};

    for (let curDestination of array) {
        let [country, city, price] = curDestination.split(' > ')
        if (country in travelList) {
            travelList[country].push([city, price]);
        } else {
            travelList[country] = [[city, price]];
        }
    }
    let sortedTravelList = Object.entries(travelList).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [country, cities] of sortedTravelList) {
        let reducedCityList = {};
        for (let [cityName, cityPrice] of cities) {
            if (cityName in reducedCityList) {
                if (reducedCityList[cityName] > cityPrice) {
                    reducedCityList[cityName] = cityPrice;
                }
            } else {
                reducedCityList[cityName] = cityPrice;
            }
        }
        let finalStr = `${country} ->`;
        let sortedCities = Object.entries(reducedCityList).sort((a, b) => a[1] - b[1]);
        for (let [city, price] of sortedCities) {
            finalStr += ` ${city} -> ${price}`;
        }
        console.log(finalStr);
    }
    
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);