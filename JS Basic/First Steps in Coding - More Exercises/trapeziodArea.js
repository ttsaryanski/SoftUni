function trapeziodArea(input) {
    let b1 = Number(input[1]);
    let b2 = Number(input[0]);
    let h = Number(input[2]);
    let Area = ((b1 + b2) * h / 2).toFixed(2);
    console.log(Area);
}
trapeziodArea([8, 13, 7])