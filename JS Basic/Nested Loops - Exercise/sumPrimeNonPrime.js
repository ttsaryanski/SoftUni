function sumPrimeNonPrime(input) {
    let sumPrime = 0;
    let sumNonPrime = 0;

    let i = 0;
    let command = input[i];
    i++;

    while (command !== "stop") {
        let num = Number(command);
            if (num < 0) {
                console.log(`Number is negative.`);
                command = input[i];
                i++;
                continue;
            }
        let isPrime = true;

        for (let divisor = 2; divisor < num; divisor++) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            sumPrime += num;
        } else {
            sumNonPrime += num;
        }
        command = input[i];
        i++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
    
}

// sumPrimeNonPrime(["3",
// "9",
// "0",
// "7",
// "19",
// "4",
// "stop"]);

sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"]);