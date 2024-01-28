function areaOfFigures(input) {
    let shape = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);
    if (shape === "square") {
        let areaSquare = (a * a).toFixed(3);
        console.log(areaSquare);
    }
    if (shape === "rectangle") {
        let areaRectangle = (a * b).toFixed(3);
        console.log(areaRectangle);
    }
    if (shape === "circle") {
        let areaCircle = (Math.PI * a * a).toFixed(3);
        console.log(areaCircle);
    }
    if (shape === "triangle") {
        let areaTriangle = ((a * b) / 2).toFixed(3);
        console.log(areaTriangle);
    }
}
areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);