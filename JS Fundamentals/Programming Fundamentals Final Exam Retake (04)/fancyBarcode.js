function fancyBarcode(array) {

    let barcodeCount = Number(array.shift());
    let barcodePattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/;

    while (barcodeCount !== 0) {
        let target = array.shift();
        let group = '';
        if (barcodePattern.test(target)) {
            let digitPattern = /\d/g;
            if (digitPattern.test(target)) {
                let numArr = target.match(digitPattern);
                for (let num of numArr) {
                    group += num;
                }
            } else {
                group = '00';
            }
            console.log(`Product group: ${group}`);
        } else {
            console.log("Invalid barcode");
        }

        barcodeCount--;
    }
    
}

fancyBarcode([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);
fancyBarcode([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]);
