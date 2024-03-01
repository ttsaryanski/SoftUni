function wordOccurrences(arr) {

    let wordMap = new Map();

    for (let curWord of arr) {
        let count = 1;
        if (wordMap.has(curWord)) {
            count += wordMap.get(curWord);
        }

        wordMap.set(curWord, count);
    }
    let sortedArr = Array.from(wordMap).sort((a, b) => b[1] - a[1]);
    
    for (let row of sortedArr) {
        console.log(`${row[0]} -> ${row[1]} times`);
    }
    
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is",
"another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
