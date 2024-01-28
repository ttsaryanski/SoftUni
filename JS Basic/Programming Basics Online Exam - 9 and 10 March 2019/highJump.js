function highJump(input) {
    let targetHight = Number(input[0]);
    let jump = 0;
    let attempts = 0;
    let startHight = targetHight - 30;
    i = 1;

    while (startHight <= targetHight ) {
        let tempResult = Number(input[i]);

        if (tempResult > startHight) {
            startHight += 5;
            attempts = 0;
        } else {
            attempts++;
        }
        jump++;
        if (attempts === 3) {
            break;
        }
        i++;
    }
    if (attempts === 3) {
        console.log(`Tihomir failed at ${startHight}cm after ${jump} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${targetHight}cm after ${jump} jumps.`);
    }

}

highJump(["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"]);

// highJump(["250",
// "225",
// "224",
// "225",
// "228",
// "231",
// "235",
// "234",
// "235"]);