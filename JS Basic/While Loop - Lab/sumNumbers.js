function sumNumbers(input) {
    let target = Number(input[0]);
    let sum = 0;

    let i = 1;
    let num = Number(input[i]);

    while (sum < target) {
        sum += num;
        i++;
        num = Number(input[i]);
    }
console.log(sum);
    
}

sumNumbers((["100",
"10",
"20",
"30",
"40"]));
sumNumbers((["20",
"1",
"2",
"3",
"4",
"5",
"6"]));
