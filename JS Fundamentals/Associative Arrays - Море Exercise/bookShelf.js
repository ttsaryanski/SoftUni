function bookShelf(arr) {

    let shelfObj = {};

    for (let row of arr) {
        if (row.includes('->')) {
            let [shelfID, shelfGenre] = row.split(' -> ');

            if (!shelfObj.hasOwnProperty(shelfID)) {
                shelfObj[shelfID] = { [shelfGenre]: [] }
            }

        } else {
            let [info, genre] = row.split(', ');
            
            for (let key in shelfObj) {
                if (shelfObj[key].hasOwnProperty(genre)) {
                    shelfObj[key][genre].push(info);
                    break;
                }
            }
        }
    }
    let shelfArr = Object.keys(shelfObj);
    let sortedShelfArr = shelfArr.sort((a, b) => {
        let lengthA = Object.entries(shelfObj[a])[0][1].length;
        let lengthB = Object.entries(shelfObj[b])[0][1].length;
        return lengthB - lengthA;
    });
    sortedShelfArr.forEach(element => {
        console.log(`${element} ${Object.keys(shelfObj[element])}: ${Object.values(shelfObj[element])[0].length}`);
        let valueArr = Object.values(shelfObj[element])[0];
        let sortedValue = valueArr.sort((a, b) => a.localeCompare(b));
        for (let val of sortedValue) {
            console.log(`--> ${val}`);
        }
        
    });

}

bookShelf([
    '1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);
bookShelf([
    '1 -> mystery',
    '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
]);
