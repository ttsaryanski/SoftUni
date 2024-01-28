function suppliesForSchool(input) {
    let allPackPenPrice = Number(input[0]) * 5.80;
    let allPackMarkerPrice = Number(input[1]) * 7.20;
    let allBlackboardCleanerPrice = Number(input[2]) * 1.20;
    let percent = Number(input[3]) / 100;
    let allPriceBeforePercent = allPackPenPrice + allPackMarkerPrice + allBlackboardCleanerPrice;
    let endPrice = allPriceBeforePercent - (allPriceBeforePercent * percent);
    console.log(endPrice);
}
suppliesForSchool(["2", "3", "4", "25"])
suppliesForSchool(["4", "2", "5", "13"])