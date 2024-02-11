function airPollution(arr1, arr2) {

    let map = [];
    for (let iterator of arr1) {
        iterator = iterator.split(' ').map(Number);
        map.push(iterator);
    }
    
    for (let token of arr2) {
        let commands = token.split(' ');
        let command = commands[0];
        let value = Number(commands[1]);
        
        if (command === 'breeze') {
            let newArr = map[value];
            for (let m = 0; m < newArr.length; m++) {
                let num = newArr[m];
                num -= 15;
                if (num < 0) {
                    num = 0;
                }
                newArr[m] = num;
            }
            map[value] = newArr;
        } else if (command === 'gale') {
            for (let i = 0; i < map.length; i++) {
                map[i][value] -= 20;
                if (map[i][value] < 0) {
                    map[i][value] = 0;
                }
            }
        } else if (command === 'smog') {
            for (let m = 0; m < map.length; m++) {
                for (let n = 0; n < map[m].length; n++) {
                    let num = map[m][n];
                    num += value;
                    map[m][n] = num;
                }
            }
        }
    }
    //let isPolluted = true;
    let finalResult = [];
    let count = 0;
    for (let m = 0; m < map.length; m++) {
        for (let n = 0; n < map[m].length; n++) {
            let num = map[m][n];
            let result = '';
            if (num >= 50) {
                result += `[${m}-${n}]`;
                finalResult.push(result);
                count++;
            }
        }   
    }
    if (count !== 0) {
        console.log(`Polluted areas: ${finalResult.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
    
}

airPollution([
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24"],
    ["breeze 1", "gale 2", "smog 25"]);
airPollution([
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24"],
    ["smog 11", "gale 3", "breeze 1", "smog 2"]);
airPollution([
    "5 7 2 14 4",
    "21 14 2 5 3",
    "3 16 7 42 12",
    "2 20 8 39 14",
    "7 34 1 10 24"],
    ["breeze 1", "gale 2", "smog 35"]);
