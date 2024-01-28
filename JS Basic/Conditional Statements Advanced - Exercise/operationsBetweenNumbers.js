function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];
    let sum = 0;
    let evenOrOdd = "";

    switch (operator) {
        case "+":
            sum = num1 + num2;
            if (sum % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${sum} - ${evenOrOdd}`);
            break;
        case "-":
            sum = num1 - num2;
            if (sum % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${sum} - ${evenOrOdd}`);
            break;
        case "*":
            sum = num1 * num2;
            if (sum % 2 === 0) {
                evenOrOdd = "even";
            } else {
                evenOrOdd = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${sum} - ${evenOrOdd}`);
            break;
        case "/":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
            sum = num1 / num2;
            console.log(`${num1} / ${num2} = ${sum.toFixed(2)}`);
            }
            
            break;
        case "%":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
            sum = num1 % num2;
            console.log(`${num1} % ${num2} = ${sum}`);
            }
            
            break;
    }


}

//operationsBetweenNumbers(["10", "12", "+"]);
//operationsBetweenNumbers(["10", "1", "-"]);
//operationsBetweenNumbers(["7", "3", "*"]);
//operationsBetweenNumbers(["123", "12", "/"]);
//operationsBetweenNumbers(["10", "3", "%"]);
operationsBetweenNumbers(["112", "0", "/"]);
//operationsBetweenNumbers(["10", "0", "%"]);