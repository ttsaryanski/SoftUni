function multiplyBy2(input) {
    let multipler = Number(input[0]);
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        result = input[i] * 2;
        if (result >= 0) {
            console.log(`Result: ${result.toFixed(2)}`);
        } else {
            console.log("Negative number!");
        }
        
    }
    
}

// multiplyBy2([
// "12",
// "43.2144",
// "12.3",
// "543.23",
// "-20"]);

// multiplyBy2([
// "23.43",
// "12.3245",
// "0",
// "65.23432",
// "23",
// "65",
// "-12"]);

multiplyBy2(["-123"]);