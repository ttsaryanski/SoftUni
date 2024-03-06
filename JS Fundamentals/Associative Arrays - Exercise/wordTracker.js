function wordTracker(arr) {

    let targetsWord = arr.shift().split(' ');
    
    let targetsWordObj = {};
    for (let word of targetsWord) {
        targetsWordObj[word] = 0;
    }

    for (let curWord of arr) {
        if (curWord in targetsWordObj) {
            targetsWordObj[curWord]++;
        }
    }
    
    let sorted = Object.entries(targetsWordObj).sort((a, b) => b[1] - a[1]);
    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
    
}

wordTracker(
    ['this sentence', 'In', 'this', 'sentence', 'you', 'have',
        'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this',
        'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
);
wordTracker(
    ['is the', 'first', 'sentence', 'Here', 'is',
        'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);
