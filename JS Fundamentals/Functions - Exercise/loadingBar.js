function loadingBar(num) {

    let barArr = [];
    let position = 10;
    while (position > 0) {
        barArr.push('.');
        position--;
    }

    let count = num / 10;
    for (let percent = 1; percent <= count; percent++) {
        barArr.unshift('%');
        barArr.pop();
    }

    if (num < 100) {
        console.log(`${num}% [${barArr.join('')}]`);
        console.log('Still loading...');
    } else if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${barArr.join('')}]`);
    }

}

loadingBar(30);
loadingBar(50);
loadingBar(100);