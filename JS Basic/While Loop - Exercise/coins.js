function coins(input) {
    let change = Math.round(Number(input[0]) * 100);
    let coin = 0;

    while (change !== 0) {
        if (change >= 200) {
            change -= 200;
            coin++;
        } else if (change >= 100) {
            change -= 100;
            coin++;
        } else if (change >= 50) {
            change -= 50;
            coin++;
        } else if (change >= 20) {
            change -= 20;
            coin++;
        } else if (change >= 10) {
            change -= 10;
            coin++;
        } else if (change >= 5) {
            change -= 5;
            coin++;
        } else if (change >= 2) {
            change -= 2;
            coin++;
        } else if (change >= 1) {
            change -= 1;
            coin++;
        }
    }
    if (change === 0) {
        console.log(coin);
    }
    
}

coins(["1.23"]);
// coins(["2"]);
//coins(["0.56"]);
//coins(["2.73"]);