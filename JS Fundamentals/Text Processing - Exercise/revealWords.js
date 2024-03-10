function revealWords(words, text) {

    let wordsArr = words.split(', ');
    for (let word of wordsArr) {
        let target = '*'.repeat(word.length);
        
        text = text.replace(target, word);
    }
    console.log(text);
    
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');
