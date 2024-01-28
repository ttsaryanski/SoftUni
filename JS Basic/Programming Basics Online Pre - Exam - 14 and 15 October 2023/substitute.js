function substitute(input) {
    let startNumK = Number(input[0]);
    let endNumK = 8;

    let startNumL = 9;
    let endNumL = Number(input[1]);

    let startNumM = Number(input[2]);
    let endNumM = 8;

    let startNumN = 9;
    let endNumN = Number(input[3]);

    let num1 = 0;
    let num2 = 0;
    let counter = 0;
    

    for (let k = startNumK; k <= endNumK; k++) {
        for (let l = startNumL; l >= endNumL; l--) {
            if (k % 2 === 0 && l % 2 !== 0) {
                num1 = `${k}${l}`;
                for (let m = startNumM; m <= endNumM; m++) {
                    for (let n = startNumN; n >= endNumN; n--) {
                        if (m % 2 === 0 && n % 2 !== 0) {
                            num2 = `${m}${n}`;
                            if (num1 === num2 && counter < 6) {
                                console.log(`Cannot change the same player.`);
                                continue;
                            } else {
                                counter++;
                                if (counter <= 6) {
                                console.log(`${num1} - ${num2}`);
                                } else {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    
    
}

substitute(["7",
"6",
"8",
"5"]);

// substktute(["6",
// "7",
// "5",
// "6"]);