function softUniBarIncome(arr) {

    let totalSum = 0;
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;

    for (let row of arr) {
        if (row !== 'end of shift') {
            if (pattern.test(row)) {
                let curCustomer = pattern.exec(row);
                console.log(`${curCustomer.groups.name}: ${curCustomer.groups.product} - ${(curCustomer.groups.count * curCustomer.groups.price).toFixed(2)}`);
                totalSum += (curCustomer.groups.count * curCustomer.groups.price);
            }
        } else {
            break;
        }
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
    
}

softUniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);
softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);
