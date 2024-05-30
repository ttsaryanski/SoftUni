function commonElements(arr1, arr2) {
  let target = "";

  for (let index = 0; index < arr1.length; index++) {
    let element = arr1[index];
    let isIncludes = true;

    if (arr2.includes(element)) {
      isIncludes = true;
      target = element;
      console.log(target);
    } else {
      isIncludes = false;
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonElements(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
