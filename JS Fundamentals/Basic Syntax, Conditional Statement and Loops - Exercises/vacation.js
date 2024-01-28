function vacation(count, type, day) {

    let curentPrice = 0;
    let fullPrice = 0;
    let totalPrice = 0;

    switch (day) {
        case 'Friday':
            if (type === 'Students') {
                curentPrice = 8.45;
            } else if (type === 'Business') {
                curentPrice = 10.90;
            } else if (type === 'Regular') {
                curentPrice = 15;
            }
            fullPrice = curentPrice * count;
            break;
        case 'Saturday':
            if (type === 'Students') {
                curentPrice = 9.80;
            } else if (type === 'Business') {
                curentPrice = 15.60;
            } else if (type === 'Regular') {
                curentPrice = 20;
            }
            fullPrice = curentPrice * count;
            break;
        case 'Sunday':
            if (type === 'Students') {
                curentPrice = 10.46;
            } else if (type === 'Business') {
                curentPrice = 16;
            } else if (type === 'Regular') {
                curentPrice = 22.50;
            }
            fullPrice = curentPrice * count;
            break;
    }

    if (type === 'Students' && count >= 30) {
        totalPrice = fullPrice * 0.85;
    } else if (type === 'Business' && count >= 100) {
        totalPrice = fullPrice - (curentPrice * 10);
    } else if (type === 'Regular' && (count >= 10 && count <= 20)) {
        totalPrice = fullPrice * 0.95;
    } else {
        totalPrice = fullPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

    
}

vacation(30, 'Students', 'Sunday');
vacation(40, 'Regular', 'Saturday');
