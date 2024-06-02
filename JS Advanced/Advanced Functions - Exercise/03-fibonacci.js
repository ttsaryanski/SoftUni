function fibonacci() {

    let [a, b] = [0, 1];

    return function () {
        let num = b;
        [a, b] = [b, b + a];
        return num;
    }
    
}

fibonacci();

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
