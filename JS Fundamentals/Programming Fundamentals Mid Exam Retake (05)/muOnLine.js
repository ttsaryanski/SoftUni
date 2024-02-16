function muOnLine(input) {

    let rooms = input.split('|');
    let health = 100;
    let coins = 0;
    let roomsCount = 1;

    for (let i = 0; i < rooms.length; i++) {
        let token = rooms[i];
        let commands = token.split(' ') ;
        let command = commands[0];
        let value = Number(commands[1]);

        if (command === 'potion') {
            let num = 0;
            if (health + value > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += value;
                num = value;
            }
            roomsCount++;
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            coins += value;
            roomsCount++;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health > 0) {
                roomsCount++;
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomsCount}`);
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${coins}`);
    console.log(`Health: ${health}`);
    
}

//muOnLine("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnLine("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
