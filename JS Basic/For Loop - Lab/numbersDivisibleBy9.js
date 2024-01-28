function numbersDivisibleBy9(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    
    for (let currentNumber = num1; currentNumber <= num2; currentNumber++) {
        if (currentNumber % 9 === 0) {
        sum += currentNumber; 
        }
    }
    console.log(`The sum: ${sum}`);
    
    for (let currentNumber = num1; currentNumber <= num2; currentNumber++) {
        if (currentNumber % 9 === 0) {
        console.log(currentNumber);   
        }
    }

    
}

numbersDivisibleBy9(["100", "200"]);