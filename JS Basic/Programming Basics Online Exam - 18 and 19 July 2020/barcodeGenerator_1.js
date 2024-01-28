function barcodeGenerator(input) {
    let startNumOne = Number(input[0][0]);
    let startNumTwo = Number(input[0][1]);
    let startNumThree = Number(input[0][2]);
    let startNumFour = Number(input[0][3]);
    let endNumOne = Number(input[1][0]);
    let endNumTwo = Number(input[1][1]);
    let endNumThree = Number(input[1][2]);
    let endNumFour = Number(input[1][3]);
    let result = "";

    for (let i = startNumOne; i <= endNumOne; i++) {
        for (let j = startNumTwo; j <= endNumTwo; j++) {
            for (let k = startNumThree; k <= endNumThree; k++) {
                for (let l = startNumFour; l <= endNumFour; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !==0) {
                        result += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }

    
    console.log(result);
}

//barcodeGenerator(["2345", "6789"]);
barcodeGenerator(["3256", "6579"]);
//barcodeGenerator(["1365", "5877"]);