function flowerShop(input) {
    let magnoliasCount = Number(input[0]);
    let hyacinthsCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliasPrice = magnoliasCount * 3.25;
    let hyacintsPrice = hyacinthsCount * 4;
    let rosesPrice = rosesCount * 3.50;
    let cactusPrice = cactusCount * 8;
    let fullPrice = (magnoliasPrice + hyacintsPrice + rosesPrice + cactusPrice) * 0.95;

    if (fullPrice >= giftPrice) {
        console.log(`She is left with ${Math.floor(fullPrice - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - fullPrice)} leva.`);
    }

}

flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);