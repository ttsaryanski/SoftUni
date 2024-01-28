function dungeonestDark(array) {
    let allRooms = array.shift();
    let curRooms = allRooms.split("|");
    let health = 100;
    let coins = 0;
    let bestRoom = 0;

    for (let i = 0; i < curRooms.length; i++) {
        let curRoom = curRooms[i];
        let curRoomInfo = curRoom.split(" ");
        let command = curRoomInfo[0];
        let curNum = Number(curRoomInfo[1]);

        if (command === "potion") {
            if (health + curNum > 100) {
                let curHealth = 100 - health;
                health = 100;
                bestRoom++;
                console.log(`You healed for ${curHealth} hp.`);
            } else {
                let curHealth = curNum;
                health += curHealth;
                bestRoom++;
                console.log(`You healed for ${curHealth} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {
            coins += curNum;
            bestRoom++;
            console.log(`You found ${curNum} coins.`);
        } else {
            health -= curNum;
            if (health > 0) {
                bestRoom++;
                console.log(`You slayed ${command}.`);
            } else {
                bestRoom++;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
//dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
