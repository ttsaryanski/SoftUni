function usdToBgn(input) {
    let usd = Number(input[0]);
    let bgn = (usd * 1.79549).toFixed(2);
    console.log(bgn);
}
usdToBgn([22]);
usdToBgn([100]);
usdToBgn([12.5]);