function functionalSum(num) {

    let result = 0;
    result += num;

    function sum(num1) {
        result += num1;
        return sum;
    }

    sum.toString = () => result;
    return sum;
    
}

functionalSum(1);
console.log(functionalSum(1)(6)(-3).toString());
