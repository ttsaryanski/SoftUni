function minNumber(input) {
    let i = 0;
    let value = input[i];
    let minValue = Number.MAX_SAFE_INTEGER;

    while (value !== "Stop") {
        value = Number(input[i]);
        if (value < minValue) {
            minValue = value;
        }

        i++;
        value = input[i];

    }
    console.log(minValue);
    
}

minNumber(["100",
"99",
"80",
"70",
"Stop"]);

minNumber(["-10",
"20",
"-30",
"Stop"]);

minNumber(["45",
"-20",
"7",
"99",
"Stop"]);

minNumber(["999",
"Stop"]);

minNumber(["-1",
"-2",
"Stop"]);