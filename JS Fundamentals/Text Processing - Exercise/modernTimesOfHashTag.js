function modernTimesOfHashTag(str) {

    let arr = str.split(' ');
    arr = arr.filter(word => word.startsWith('#') && word.length > 1);
    let pattern = /\b[A-Za-z]+\b/;

    for (let word of arr) {
        word = word.slice(1);

        if (pattern.test(word)) {
            console.log(word);
        }
    }
    
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
