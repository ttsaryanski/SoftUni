function barcodeGenerator(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = "";

    for (let targetNum = startNum; targetNum <= endNum; targetNum++) {
        let isValidTargetNum = true;
        let targetNumString = String(targetNum);

        for (let value = targetNumString.length - 1; value >= 0; value--) {
            let index = Number(targetNumString[value])
            if (index % 2 === 0) {
                isValidTargetNum = false;
                break;
            }
        }
        if (isValidTargetNum) {
            result += targetNum + " ";
        }
    }
    console.log(result);
}

barcodeGenerator(["2345", "6789"]);
//barcodeGenerator(["3256", "6579"]);
//barcodeGenerator(["1365", "5877"]);