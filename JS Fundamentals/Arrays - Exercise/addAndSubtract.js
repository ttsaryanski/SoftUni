function addAndSubtract(array) {
  let newArr = [];
  let sumOriginalArr = 0;
  let sumNewArr = 0;

  let position = 0;

  for (let index = 0; index < array.length; index++) {
    let value = array[index];
    sumOriginalArr += value;
    let newValue = 0;

    if (value % 2 === 0) {
      newValue = value + position;
    } else if (value % 2 !== 0) {
      newValue = value - position;
    }
    position++;
    newArr.push(newValue);
    sumNewArr += newValue;
  }

  console.log(newArr);
  console.log(sumOriginalArr);
  console.log(sumNewArr);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
