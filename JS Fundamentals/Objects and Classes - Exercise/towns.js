function towns(array) {

    for (let curInfo of array) {
        let [cityName, cityLatitude, cityLongitude] = curInfo.split(' | ');
        let shortLatitude = Number(cityLatitude).toFixed(2);
        let shortLongitude = Number(cityLongitude).toFixed(2);

        let City = { town: cityName, latitude : shortLatitude, longitude: shortLongitude};
        console.log(City);
    }
    
}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
towns([
    'Plovdiv | 136.45 | 812.575'
]);
