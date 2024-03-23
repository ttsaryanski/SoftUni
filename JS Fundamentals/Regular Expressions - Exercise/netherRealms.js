function netherRealms(input) {

    let patternForName = /[^\s,\s]+/g;

    let demonNameArr = input.match(patternForName);
    let sortedDemonNameArr = demonNameArr.sort((a, b) => a.localeCompare(b));

    for (let demon of sortedDemonNameArr) {
        let demonName = demon;

        let demonHealth = 0;
        let healthPattern = /[^\d.\/+*-]/g;
        let healthArr = demon.match(healthPattern);
        healthArr.forEach(element => demonHealth += element.charCodeAt());

        let demonDamage = 0;
        let damagePattern = /[+-]?\d+[\.?]{0,1}\d*/g;
        if (damagePattern.test(demon)) {
            let numbersArr = demon.match(damagePattern);
            numbersArr.forEach(element => demonDamage += Number(element));

            let operatorsPattern = /\*|\//g;
            if (operatorsPattern.test(demon) && damagePattern.test(demon)) {
                let operatorsArr = demon.match(operatorsPattern);
                for (let operator of operatorsArr) {
                    if (operator === '*') {
                        demonDamage *= 2;
                    } else if (operator === '/') {
                        demonDamage /= 2;
                    }
                }
            }
        }
        console.log(`${demonName} - ${demonHealth} health, ${demonDamage.toFixed(2)} damage`);
    }
    
}

netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms('Gos/ho');
