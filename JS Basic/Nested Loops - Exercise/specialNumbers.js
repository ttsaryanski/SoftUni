function specialNumbers(input) {
    let N = Number(input[0]);
    let specialNumber = "";

    for (let trial = 1111; trial <= 9999; trial++) {
        let target = String(trial);
        let isValidTrial = true;
        
        for (let value = target.length - 1; value >= 0; value--) {
            let index = Number(target[value]);
            if (N % index !== 0) {
                isValidTrial = false;
                break;
            }
        }
        if (isValidTrial) {
        specialNumber += trial + " ";
        }
    }
    console.log(specialNumber);
    
}

//specialNumbers(["3"]);
//specialNumbers(["11"]);
specialNumbers(["16"]);