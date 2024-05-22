function triangleArea(a, b, c) {

    let p = (a + b + c) / 2;
    let S = Math.sqrt(p * (p - a) * (p - b) * (p - c))

    console.log(S);
    
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);
