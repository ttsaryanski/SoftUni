function circleAreaAndPerimeter(input) {
    let r = Number(input[0]);
    let calculatedArea = (Math.PI * (r * r)).toFixed(2);
    let calculatedPerimeter = (2 * Math.PI * r).toFixed(2);
    console.log(calculatedArea);
    console.log(calculatedPerimeter);
}
circleAreaAndPerimeter([3]);
circleAreaAndPerimeter([4.5]);