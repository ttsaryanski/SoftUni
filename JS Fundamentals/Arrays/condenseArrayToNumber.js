function condenseArrayToNumber(array) {
  let newArr = [];
  let length = array.length;

  while (array.length > 1) {
    for (let index = 0; index < array.length; index++) {
      length--;
      if (length >= 1) {
        let element = array[index] + array[index + 1];
        newArr.push(element);
      }
    }
    array = newArr;
    newArr = [];
    length = array.length;
  }
  console.log(array.join());
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
