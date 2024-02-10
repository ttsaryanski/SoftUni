function buildAWall(arr) {

    arr.sort((a, b) => a - b);
    let target = 30;
    let fullBeton = [];
    let totalBeton = 0;
    let fullPrice = 0;

    while (arr.some(arr => arr < 30)) {
        let curBeton = 0;
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            if (num < target) {
                curBeton += 195;
                totalBeton += 195
            }
        }
        fullBeton.push(curBeton);
        arr = arr.map(x => x + 1);
            if (arr[arr.length - 1] === target) {
                arr.pop();
            }
    }
    fullPrice = totalBeton * 1900;
    console.log(fullBeton.join(', '));
    console.log(`${fullPrice} pesos`);
    
}

buildAWall([21, 25, 30]);
buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);
