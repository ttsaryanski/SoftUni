function repainting(input) {
    let protectorPrice = (Number(input[0]) + 2) * 1.5;
    let paintPrice = (Number(input[1]) + Number(input[1]) * 0.1) * 14.50;
    let solventPrice = Number(input[2]) * 5;
    let hourPerPainting = Number(input[3]);
    let bagPrice = 0.40;
    let allPriceFromMaterials = protectorPrice + paintPrice + solventPrice + bagPrice;
    let laborPrice = (allPriceFromMaterials * 0.30) * hourPerPainting;
    let allPrice = allPriceFromMaterials + laborPrice;
    console.log(allPrice);

}
repainting(["10", "11", "4", "8"])
repainting(["5", "10", "10", "1"])