function sumFirstAndLastArrayElements(input) {
  let firstNum = Number(input[0]);
  let lastNum = Number(input[input.length - 1]);

  console.log(firstNum + lastNum);
}

sumFirstAndLastArrayElements([20, 30, 40]);
sumFirstAndLastArrayElements([10, 17, 22, 33]);
sumFirstAndLastArrayElements([11, 58, 69]);
