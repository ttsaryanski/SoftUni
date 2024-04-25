function sequences(array) {

    let listObj = {};
    for (let row of array) {
        let value = JSON.parse(row);
        value = value.sort((a, b) => b - a);
        let key = JSON.stringify(value);
        if (!listObj.hasOwnProperty(key)) {
           listObj[key] = value; 
        }
    }
    let sortedResultArr = Object.values(listObj).sort((a, b) => a.length - b.length);
    sortedResultArr.forEach(element => console.log(`[${element.join(', ')}]`));
    
}

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
sequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);
