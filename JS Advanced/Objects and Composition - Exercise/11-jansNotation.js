function jansNotation(array) {

    let stack = [];

    for (let token of array) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            if (stack.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }
            let b = stack.pop();
            let a = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = a / b;
                    break;
                default:
                    console.log("Error: invalid operator!");
                    return;
            }
            stack.push(result);
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else {
        console.log("Error: too many operands!");
    }

    
}

jansNotation([3, 4, '+']);


