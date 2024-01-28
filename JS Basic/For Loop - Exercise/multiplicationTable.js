function multiplicationTable(input) {
    let multipler = Number(input[0]);

    for (let num = 1; num <= 10; num++) {
        sum = num * multipler;
        console.log(`${num} * ${multipler} = ${sum}`);
    }
    
}

multiplicationTable(["5"]);
