function stringLength(par1, par2, par3) {
    
    let sumLength = 0;
    let averageLength = 0;

    let length1 = par1.length;
    let length2 = par2.length;
    let length3 = par3.length;

    sumLength = length1 + length2 + length3;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);

}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
