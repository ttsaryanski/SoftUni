function evenPowerOf2(input) {
    let num = Number(input[0]);
    
    for (let n = 0; n <= num; n++) {
        if (n % 2 === 0) {
            console.log(Math.pow(2, n));
        }
        
    }
}

//evenPowerOf2(["3"]);
//evenPowerOf2(["4"]);
//evenPowerOf2(["5"]);
//evenPowerOf2(["6"]);
evenPowerOf2(["7"]);