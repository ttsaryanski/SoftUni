function equalArrays(arr1, arr2) {
  let curValue1 = 0;
  let curValue2 = 0;
  let isNotDifferent = true;
  let firtsIndexFalse = 0;
  let sumValue = 0;

  while (arr1.length > 0) {
    curValue1 = arr1.shift();
    curValue2 = arr2.shift();
    firtsIndexFalse++;

    if (curValue1 !== curValue2) {
      isNotDifferent = false;
      console.log(
        `Arrays are not identical. Found difference at ${
          firtsIndexFalse - 1
        } index`
      );
      break;
    } else {
      sumValue += Number(curValue1);
    }
  }
  if (isNotDifferent === true) {
    console.log(`Arrays are identical. Sum: ${sumValue}`);
  }
}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
