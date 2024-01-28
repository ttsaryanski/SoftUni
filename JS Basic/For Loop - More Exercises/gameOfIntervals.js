function gameOfIntervals(input) {
    let stepCount = Number(input[0]);
    let number = 0;
    let num = 0;
    let sum = 0;

    let groupTo10 = 0;
    let groupTo20 = 0;
    let groupTo30 = 0;
    let groupTo40 = 0;
    let groupTo50 = 0;
    let groupInvalid = 0;

    for (let i = 1; i < input.length; i++) {
        number = input[i];
        if (number >= 0 && number <= 9) {
            num = number * 0.20;
            sum += num;
            groupTo10 += 1;
        } else if (number >= 10 && number <= 19) {
            num = number * 0.30;
            sum += num;
            groupTo20 += 1;
        } else if (number >= 20 && number <= 29) {
            num = number * 0.40;
            sum += num;
            groupTo30 += 1;
        } else if (number >= 30 && number <= 39) {
            num = 50;
            sum += num;
            groupTo40 += 1;
        } else if (number >= 40 && number <= 50) {
            num = 100;
            sum += num;
            groupTo50 += 1;
        } else if (number < 0 || number > 50) {
            sum = sum / 2;
            groupInvalid += 1;
        }
    }
    console.log(sum.toFixed(2));
    console.log(`From 0 to 9: ${((groupTo10 / stepCount) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((groupTo20 / stepCount) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((groupTo30 / stepCount) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((groupTo40 / stepCount) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((groupTo50 / stepCount) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((groupInvalid / stepCount) * 100).toFixed(2)}%`);

    
}

gameOfIntervals(["10",
"43",
"57",
"-12",
"23",
"12",
"0",
"50",
"40",
"30",
"20"]);