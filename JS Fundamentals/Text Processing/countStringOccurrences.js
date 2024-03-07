function countStringOccurrences(str, target) {

    let wordsArr = str.split(' ');
    count = 0;
    for (let word of wordsArr) {
        if (word === target) {
            count++
        }
    }
    console.log(count);
    
}

countStringOccurrences("This is a word and it also is a sentence", "is");
countStringOccurrences("softuni is great place for learning new programming languages", "softuni");
