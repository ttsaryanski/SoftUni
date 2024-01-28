function sumOfNumbers(input) {
    let text = input[0];
    let sum = 0;

    for (let index = 0; index < text.length; index++) {
        let curentSymbol = Number(text[index]);
        sum += curentSymbol;
    }
    console.log(`The sum of the digits is:${sum}`);
    
}

sumOfNumbers(["1234"]);
sumOfNumbers(["564891"]);