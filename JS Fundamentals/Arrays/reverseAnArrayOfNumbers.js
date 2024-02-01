function reverseAnArrayOfNumbers(num, arr) {
  let newArr = [];
  let str = "";

  for (let i = 0; i < num; i++) {
    let newNum = arr[i];
    result = newArr.push(newNum);
  }

  for (let j = newArr.length - 1; j >= 0; j--) {
    let curNum = newArr[j];
    str += curNum + " ";
  }

  console.log(str);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
