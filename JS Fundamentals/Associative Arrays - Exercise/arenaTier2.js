function arenaTier(array) {

    let row = array.shift();
    let gladiatorObject = {};

    while (row !== "Ave Cesar") {
        if (row.includes("->")) {
            let [currentGladiator, technique, currSkill] = row.split(' -> ');
            currSkill = Number(currSkill);
            if (currentGladiator in gladiatorObject) {
                let findTechnique = gladiatorObject[currentGladiator].find(el => el[0] === technique);
                if (findTechnique) {
                    if (findTechnique[1] < currSkill) {
                        findTechnique[1] = currSkill;
                    }
                } else {
                    gladiatorObject[currentGladiator].push([technique, currSkill]);
                }
            } else {
                gladiatorObject[currentGladiator] = [[technique, currSkill]];
            }
        } else if (row.includes("vs")) {
            let [gladiator1, gladiator2] = row.split(" vs ");
            if (gladiator1 in gladiatorObject && gladiator2 in gladiatorObject) {
                let gladiator1Inventory = gladiatorObject[gladiator1];
                let gladiator2Inventory = gladiatorObject[gladiator2];
                for (let [technique1, skill1] of gladiator1Inventory) {
                    for (let [technique2, skill2] of gladiator2Inventory) {
                        if (technique1 === technique2) {
                            if (skill1 > skill2) {
                                delete gladiatorObject[gladiator2];
                                break;
                            } else if (skill1 < skill2) {
                                delete gladiatorObject[gladiator1];
                                break;
                            }
                        }
                    }
                }
            }
        }
        row = array.shift()
    }
    let resultObj = {};
    let gladiatorsArr = Object.entries(gladiatorObject);
    for (let [curName, curInfo] of gladiatorsArr) {
        let fullSkill = 0;
        for (let [technique, skill] of curInfo) {
            fullSkill += skill;
        }
        resultObj[curName] = { fullSkill: fullSkill, info: curInfo };
    }
    let sortedResultArr = Object.entries(resultObj).sort((a, b) => b[1].fullSkill - a[1].fullSkill || a[0].localeCompare(b[0]));
    for (let [name, info] of sortedResultArr) {
        let [skill, techniqueArr] = Object.entries(info);
        console.log(`${name}: ${skill[1]} skill`);
        techniqueArr = techniqueArr[1];
        let sortedTechnique = techniqueArr.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        sortedTechnique.forEach(element => console.log(`- ${element[0]} <!> ${element[1]}`));
    }


}


arenaTier([
    "Peter -> BattleCry -> 400",
    "Alex -> PowerPunch -> 300",
    "Stefan -> Duck -> 200",
    "Stefan -> Tiger -> 250",
    "Ave Cesar",
]);
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);