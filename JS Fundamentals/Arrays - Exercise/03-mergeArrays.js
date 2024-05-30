function mergeArrays(arr1, arr2) {
  let newArr = [];

  for (let index = 0; index < arr1.length; index++) {
    let element1 = arr1[index];
    let element2 = arr2[index];

    if (index % 2 === 0) {
      newArr.push(Number(element1) + Number(element2));
    } else {
      newArr.push(element1 + element2);
    }
  }

  console.log(newArr.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"],
  ["17", "22", "87", "36", "11"]);
mergeArrays(["13", "12312", "5", "77", "4"],
  ["22", "333", "5", "122", "44"]);
