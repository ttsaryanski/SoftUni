function maxNumber(array) {
  let newArr = [];

  while (array.length > 0) {
    let element = array.shift();
    let isBig = true;
    for (let index = 0; index < array.length; index++) {
      let value = array[index];

      if (element <= value) {
        isBig = false;
        break;
      } else {
        isBig = true;
      }
    }
    if (isBig === true) {
      newArr.push(element);
    }
  }
  console.log(newArr.join(" "));
}

maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
