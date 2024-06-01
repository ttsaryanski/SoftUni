function solution(input) {

    let num  = input;

    return function (params) {
        let sum = num + params;
        return sum;
    };
    
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
