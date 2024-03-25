function heroesOfCodeAndLogicVII(arr) {

    let heroObj = {};
    let heroesCount = Number(arr.shift());
    let row = arr.shift();

    while (heroesCount !== 0) {
        let token = row.split(' ');
        let name = token[0];
        let hp = Number(token[1]);
        if (hp > 100) {
            hp = 100;
        }
        let mp = Number(token[2]);
        if (mp > 200) {
            mp = 200;
        }
        heroObj[name] = { nameHP: hp, nameMP: mp }

        heroesCount--;
        row = arr.shift();
    }
    while (row !== 'End') {
        let commands = row.split(' - ');
        let command = commands.shift();
        if (command === 'CastSpell') {
            let name = commands[0];
            let neededMP = Number(commands[1]);
            let spellName = commands[2];

            if (name in heroObj) {
                if (heroObj[name].nameMP >= neededMP) {
                    heroObj[name].nameMP -= neededMP;
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroObj[name].nameMP} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }
            }
        } else if (command === 'TakeDamage') {
            let name = commands[0];
            let damage = Number(commands[1]);
            let enemy = commands[2];

            if (name in heroObj) {
                heroObj[name].nameHP -= damage;
                if (heroObj[name].nameHP > 0 ) {
                    console.log(`${name} was hit for ${damage} HP by ${enemy} and now has ${heroObj[name].nameHP} HP left!`);
                } else {
                    delete heroObj[name];
                    console.log(`${name} has been killed by ${enemy}!`);
                }
            }
        } else if (command === 'Recharge') {
            let name = commands[0];
            let mpUp = Number(commands[1]);

            if (name in heroObj) {
                if ((heroObj[name].nameMP + mpUp) > 200) {
                    let diference = 200 - heroObj[name].nameMP;
                    heroObj[name].nameMP = 200;
                    console.log(`${name} recharged for ${diference} MP!`);
                } else {
                    heroObj[name].nameMP += mpUp;
                    console.log(`${name} recharged for ${mpUp} MP!`);
                }
            }
        } else if (command === 'Heal') {
            let name = commands[0]
            let hpUp = Number(commands[1]);

            if (name in heroObj) {
                if ((heroObj[name].nameHP + hpUp) > 100) {
                    let diference = 100 - heroObj[name].nameHP;
                    heroObj[name].nameHP = 100;
                    console.log(`${name} healed for ${diference} HP!`);
                } else {
                    heroObj[name].nameHP += hpUp;
                    console.log(`${name} healed for ${hpUp} HP!`);
                }
            }
        }

        row = arr.shift();
    }
    let entries = Object.entries(heroObj);
    for (let [name, info] of entries) {
        console.log(`${name}`);
        let [hp, mp] = Object.entries(info);
        console.log(`  HP: ${hp[1]}`);
        console.log(`  MP: ${mp[1]}`);
    }

}

heroesOfCodeAndLogicVII([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);
heroesOfCodeAndLogicVII([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);