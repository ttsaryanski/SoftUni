function mirrorWords(arr) {

    let result = [];
    let pattern = /(@|#)[A-Za-z]{3,}\1\1[A-Za-z]{3,}\1/g;

    if (pattern.test(arr[0])) {
        let matchArr = arr[0].match(pattern);
        console.log(`${matchArr.length} word pairs found!`);
        for (let curMatch of matchArr) {
            let worldPattern = /(@|#)[A-Za-z]+\1/g;
            let worldMatch = curMatch.match(worldPattern);
            let [leftWorld, rightWorld] = worldMatch;
            leftWorld = leftWorld.slice(1, leftWorld.length - 1);
            rightWorld = rightWorld.slice(1, rightWorld.length - 1);
            let tmpRightWorld = rightWorld.split('').reverse().join('')
            if (leftWorld === tmpRightWorld) {
                result.push([leftWorld, rightWorld]);
            }
        }
        if (result.length !== 0) {
            console.log('The mirror words are:');
            let newResult = [];
            for (let [world1, world2] of result) {
                let tmp = `${world1} <=> ${world2}`
                newResult.push(tmp);
            }
            console.log(newResult.join(', '));
        } else {
            console.log('No mirror words!');
        }
    } else {
        console.log('No word pairs found!');
        console.log('No mirror words!');   
    }

}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
mirrorWords([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]);
mirrorWords([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
]);
