function hardWord(array) {

    let text = array[0].split(' ');
    let arr = array[1];
    let pattern = /[.,?!;:]/;

    for (let word of arr) {
        let target = '_'.repeat(word.length);

        for (let i = 0; i < text.length; i++) {
            if (text[i] === target) {
                text[i] = word;
            }
            if (pattern.test(text[i]) && text[i].includes(target) && text[i].length - 1 === target.length) {
                let mark = text[i][text[i].length - 1];
                let modifyWord = text[i].slice(0, text[i].length - 2);
                modifyWord = word;
                text[i] = modifyWord + mark;
            }
        }
    }
    console.log(text.join(' '));
    
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
