function factorialDivision(num1, num2) {

    let factorial1 = factorialNum(num1);
    let factorial2 = factorialNum(num2);

    console.log((factorial1 / factorial2).toFixed(2));

    function factorialNum(num) {
        let factorial = 1;

        while (num > 1) {
            factorial *= num;
            num--;
        }
        return factorial;
    }

}

factorialDivision(5, 2);
factorialDivision(6, 2);
