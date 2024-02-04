function carWash(arr) {

    let sum = curSum(arr);
    console.log(`The car is ${sum.toFixed(2)}% clean.`);

    function curSum(array) {
        let curSum = 0;
        let command = '';
        for (let i = 0; i < array.length; i++) {
            command = array[i];
            if (command === 'soap') {
                curSum += 10;
            } else if (command === 'water') {
                curSum *= 1.20;
            } else if (command === 'vacuum cleaner') {
                curSum *= 1.25;
            } else if (command === 'mud') {
                curSum *= 0.90;
            }
        }
        return curSum;
    }

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
