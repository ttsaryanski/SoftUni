function basketballEquipment(input) {
    let sneakersPrice = Number(input[0]) * 0.6;
    let outfitPrice = sneakersPrice * 0.8;
    let ballPrice = outfitPrice * 0.25;
    let accessoriesPrice = ballPrice * 0.2;
    let allprice = Number(input[0]) + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(allprice);
}
basketballEquipment(["365"])
basketballEquipment(["550"])