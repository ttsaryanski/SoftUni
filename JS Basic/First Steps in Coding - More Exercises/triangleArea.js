function triangleArea(input) {
    let a = Number(input[0]);
    let h = Number(input[1]);
    let Area = (a * h / 2).toFixed(2);
    console.log(Area);
}
triangleArea([20, 30]);
triangleArea([15, 35]);
triangleArea([7.75, 8.45]);
triangleArea([1.23456, 4.56789]);
