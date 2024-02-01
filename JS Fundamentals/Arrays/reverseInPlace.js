function reverseInPlace(arr) {
  let result = "";

  for (let curValue = arr.length - 1; curValue >= 0; curValue--) {
    let value = arr[curValue];
    result += value + " ";
  }

  console.log(result);
}

reverseInPlace(["a", "b", "c", "d", "e"]);
reverseInPlace(["abc", "def", "hig", "klm", "nop"]);
reverseInPlace(["33", "123", "0", "dd"]);
