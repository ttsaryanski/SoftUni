function arenaTier(array) {

    let gladiatorList = {};

    for (let row of array) {
        if (row !== 'Ave Cesar') {
            let token = row.split(' ');
            if (token[1] === '->') {
                if (token[0] in gladiatorList) {
                    let isChange = false;
                    for (let [qfty, skill] of gladiatorList[token[0]]) {
                        if (qfty === token[2] && skill < token[4]) {
                            gladiatorList[token[0]] = ([token[2], token[4]]);
                            isChange = true;
                            break;
                        } else if (qfty === token[2] && skill >= token[4]) {
                            isChange = true;
                            break;
                        }
                    }
                    if (!isChange) {
                        gladiatorList[token[0]].push([token[2], token[4]]);
                    }
                } else {
                    gladiatorList[token[0]] = [[token[2], token[4]]];
                }
            } else if (token[1] === 'vs') {
                if (token[0] in gladiatorList && token[2] in gladiatorList) {
                    let qlfy1Arr = gladiatorList[token[0]];
                    let qlfy2Arr = gladiatorList[token[2]];
                    for (let [qlfy1, skill] of qlfy1Arr) {
                        for (let i = 0; i < qlfy2Arr.length; i++) {
                            if (qlfy1 === qlfy2Arr[i][0]) {
                                if (skill > qlfy2Arr[i][1]) {
                                    delete gladiatorList[token[2]];
                                    break;
                                } else if (skill < qlfy2Arr[i][1]) {
                                   delete gladiatorList[token[0]];
                                   break;
                                }
                            }
                        }
                    }
                }
            }
        } else {
            let gladiatorListWithFullScore = {};
            for (let [name, specs] of Object.entries(gladiatorList)) {
                let fullScore = 0;
                for (let [spec, skill] of specs) {
                    fullScore += Number(skill);
                }
                gladiatorListWithFullScore[name] = fullScore;
            }
            let sortedFullScore = Object.entries(gladiatorListWithFullScore).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            for (let [name, score] of sortedFullScore) {
                let result = `${name}: ${score} skill`;
                console.log(result);
                let sortedSkills = gladiatorList[name].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
                for (let [qfty, skill] of sortedSkills) {
                    console.log(`- ${qfty} <!> ${skill}`);
                }
            }
            break;
        }
    }

}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
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