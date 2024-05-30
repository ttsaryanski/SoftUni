function townsToJSON(array) {

    let result = [];

    for (const row of array.slice(1)) {
        let info = row.split('|');
        let data = []
        for (const iterator of info) {
            if (iterator.length > 0) {
                data.push(iterator.trim());
            }
        }

        let obj = {
            Town: data[0],
            Latitude: +Number(data[1]).toFixed(2),
            Longitude: +Number(data[2]).toFixed(2)
        }
        
        result.push(obj);
    }
    return JSON.stringify(result);
    
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);
