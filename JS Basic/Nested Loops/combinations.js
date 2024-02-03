function combinations(input) {
    let number = Number(input[0]);
    let sum = 0;
    let count = 0;

    for (let x1 = 0; x1 <= number; x1++) {
        for (let x2 = 0; x2 <= number; x2++) {
            for (let x3 = 0; x3 <= number; x3++) {
                sum = x1 + x2 + x3;
                if (sum === number) {
                    count++;
                    
                }
            }
        }
    }

    let endCount = count;
    console.log(endCount);
    
}

combinations(["25"]);
combinations(["20"]);
combinations(["5"]);