function sumEvenNumbers(arr) {
  let sum = 0;

  while (arr.length > 0) {
    let curNum = Number(arr.shift());
    if (curNum % 2 === 0) {
      sum += curNum;
    }
  }

  console.log(sum);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
sumEvenNumbers(["3", "5", "7", "9"]);
sumEvenNumbers(["2", "4", "6", "8", "10"]);
