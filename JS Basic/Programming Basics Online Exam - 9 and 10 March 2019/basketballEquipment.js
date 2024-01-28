function basketballEquipment(input) {
    let yearsPrice = Number(input[0]);

    let sneakersPrice = yearsPrice * 0.60;
    let outfitPrice = sneakersPrice * 0.80;
    let ballPrice = outfitPrice * 0.25;
    let accessoriesPrice = ballPrice * 0.20;
    
    let total = yearsPrice + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;
    console.log(total.toFixed(2));
    
}

basketballEquipment(["320"]);
basketballEquipment(["550"]);