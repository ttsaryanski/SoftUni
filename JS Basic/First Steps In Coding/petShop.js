function petShop(input) {
    let dogPack = Number(input[0]);
    let catPack = Number(input[1]);
    let allDogPackPrice = dogPack * 2.50;
    let allCatPackPrice = catPack * 4;
    let allPrice = allDogPackPrice + allCatPackPrice + ' lv.';
    console.log(allPrice);
}
petShop([13, 9]);