function maxNumber(input) {

    let i = 0;
    let value = input[i];
    let maxValue = Number.MIN_SAFE_INTEGER;

    while (value !== "Stop") {
        value = Number(input[i]);
        if (value > maxValue) {
            maxValue = value;
        }

        i++;
        value = input[i];

    }
    console.log(maxValue);
    
}

// maxNumber(["100",
// "99",
// "80",
// "70",
// "Stop"]);

// maxNumber(["-10",
// "20",
// "-30",
// "Stop"]);

// maxNumber(["45",
// "-20",
// "7",
// "99",
// "Stop"]);

// maxNumber(["999",
// "Stop"]);

maxNumber(["-1",
"-2",
"Stop"]);