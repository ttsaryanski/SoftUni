function sumOfOddNumbers(oddCount) {

    let allNumbers = 0;
    let sum = 0;
    let number = 1;

    while (allNumbers < oddCount) {
        if (number % 2 !== 0) {
            allNumbers++;
            sum += number;
            console.log(number);
            number++;
        } else {
            number++;
        }
    }

    console.log(`Sum: ${sum}`);
    
}

sumOfOddNumbers(5);
sumOfOddNumbers(3);
