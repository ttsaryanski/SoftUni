function evenAndOddSubtraction(arr) {
  let evenSum = 0;
  let oddSum = 0;

  while (arr.length > 0) {
    let curValue = arr.shift();

    if (curValue % 2 === 0) {
      evenSum += curValue;
    } else {
      oddSum += curValue;
    }
  }

  console.log(evenSum - oddSum);
}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);
