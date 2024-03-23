function furniture(arr) {

    let totalSum = 0;
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+[\.]{0,1}\d*)!(?<qty>\d+)/

    console.log('Bought furniture:');
    for (let row of arr) {
        if (row === 'Purchase') {
            break;
        }
        if (pattern.test(row)) {
            let curProduct = pattern.exec(row);
            let productName = curProduct.groups.name;
            console.log(productName);
            let curPrice = Number(curProduct.groups.price) * Number(curProduct.groups.qty);
            totalSum += curPrice;
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
    
    
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
furniture([
    '>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);
furniture([
    '>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
]);
