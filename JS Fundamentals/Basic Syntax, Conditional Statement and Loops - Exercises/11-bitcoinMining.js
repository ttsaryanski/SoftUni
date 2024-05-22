function bitcoinMining(input) {
  let day = 0;
  let totalCoin = 0;
  let totalMoney = 0;
  let firstCoinDay = 0;
  let isFirstCoinDay0 = true;

  while (input.length !== 0) {
    let curentMoney = 0;
    let curentCoin = 0;
    let gold = input.shift();
    day++;

    if (day % 3 === 0) {
      curentMoney = gold * 67.51 * 0.7;
    } else {
      curentMoney = gold * 67.51;
    }

    totalMoney += curentMoney;

    if (totalMoney / 11949.16 >= 1) {
      curentCoin = Math.trunc(totalMoney / 11949.16);
      totalCoin += curentCoin;
      totalMoney = totalMoney - curentCoin * 11949.16;

      if (isFirstCoinDay0) {
        firstCoinDay = day;
        isFirstCoinDay0 = false;
      }
    }
  }

  console.log(`Bought bitcoins: ${totalCoin}`);

  if (totalCoin !== 0) {
    console.log(`Day of the first purchased bitcoin: ${firstCoinDay}`);
  }

  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
//bitcoinMining([50, 100]);
//bitcoinMining([3124.15, 504.212, 2511.124]);
