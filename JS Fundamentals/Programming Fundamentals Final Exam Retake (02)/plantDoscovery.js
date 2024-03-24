function plantDoscovery(arr) {

    let plantsCount = Number(arr.shift());
    //let plantsArr = [];
    let plantsObj = {};
    let row = arr.shift();

    while (plantsCount !== 0) {
        let curPlantInfo = row.split('<->');
        let plantName = curPlantInfo[0];
        let rarityNum = Number(curPlantInfo[1]);

        if (plantName in plantsObj) {
            plantsObj[plantName].rarity = rarityNum;
        } else {
            plantsObj[plantName] = {  rarity: rarityNum, rating: [] };
        }

        plantsCount--;
        row = arr.shift();
    }

    while (row !== 'Exhibition') {
        let token = row.split(': ');
        let command = token.shift();
        if (command === 'Rate') {
            let info = token[0].split(' - ');
            let plant = info[0];
            let ratingNum = Number(info[1]);

            if (plant in plantsObj) {
                plantsObj[plant].rating.push(ratingNum);
            } else {
                console.log('error');
            }
        } else if (command === 'Update') {
            let info = token[0].split(' - ');
            let plant = info[0];
            let newRarity = Number(info[1]);

            if (plant in plantsObj) {
                plantsObj[plant].rarity = newRarity;
            } else {
                console.log('error');
            }
        } else if (command === 'Reset') {
            let plant = token[0];

            if (plant in plantsObj) {
                plantsObj[plant].rating = [];
            } else {
                console.log('error');
            }
        }

        row = arr.shift();
    }
    let entries = Object.entries(plantsObj);
    console.log('Plants for the exhibition:');

    for (let [plantName, plantInfo] of entries) {
        let plantRarity = plantInfo.rarity;
        let plantRating = plantInfo.rating;
        let averageRating = 0;
        let totalRating = 0;
        if (plantRating.length === 0) {
            averageRating = 0;
        } else {
            for (let num of plantRating) {
                totalRating += num;
            }
            averageRating = totalRating / plantRating.length;
        }
        console.log(`- ${plantName}; Rarity: ${plantRarity}; Rating: ${averageRating.toFixed(2)}`);
        
    }
    
        
}

plantDoscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);
plantDoscovery([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]);
