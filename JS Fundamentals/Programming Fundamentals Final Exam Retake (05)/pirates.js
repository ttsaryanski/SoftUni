function pirates(array) {

    let result = [];
    let cityInfo = {};
    let commands = array.shift();

    while (commands !== 'Sail') {
        let token = commands.split('||');
        let name = token[0];
        let people = Number(token[1]);
        let gold = Number(token[2]);

        let findName = result.find(n => n.name === name);
        let idx = result.indexOf(findName);
        if (findName) {
            result[idx].people += people;
            result[idx].gold += gold;
        } else {
            cityInfo = { name, people, gold };
            result.push(cityInfo);
        }

        commands = array.shift();
    }
    
    commands = array.shift();
    while (commands !== 'End') {
        let token = commands.split('=>');
        let command = token.shift();
        if (command === 'Plunder') {
            let name = token[0];
            let people = Number(token[1]);
            let gold = Number(token[2]);

            let findName = result.find(n => n.name === name);
            let idx = result.indexOf(findName);

            if (findName) {
                result[idx].people -= people;
                result[idx].gold -= gold;
                console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                if (result[idx].people <= 0 || result[idx].gold <= 0) {
                    result.splice(idx, 1);
                    console.log(`${name} has been wiped off the map!`);
                }
            }

        } else if (command === 'Prosper') {
            let name = token[0];
            let gold = Number(token[1]);
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                let findName = result.find(n => n.name === name);
                let idx = result.indexOf(findName);

                if (findName) {
                    result[idx].gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${name} now has ${result[idx].gold} gold.`);
                }
            }
        }

        commands = array.shift();
    }

    if (result.length === 0) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${result.length} wealthy settlements to go to:`);
        result.forEach(e => console.log(`${e.name} -> Population: ${e.people} citizens, Gold: ${e.gold} kg`));
    }
    
}

// pirates([
//     "Tortuga||345000||1250",
//     "Santo Domingo||240000||630",
//     "Havana||410000||1100",
//     "Sail",
//     "Plunder=>Tortuga=>75000=>380",
//     "Prosper=>Santo Domingo=>180",
//     "End"
// ]);
pirates([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);
