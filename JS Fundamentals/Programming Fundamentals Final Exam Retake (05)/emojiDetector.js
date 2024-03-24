function emojiDetector(array) {

    let cool = 0;
    let numPattern = /\d/g;
    let numsArr = array[0].match(numPattern);
    cool = Number(numsArr[0]);
    for (let i = 1; i < numsArr.length; i++) {
        cool *= Number(numsArr[i]);
    }
    console.log(`Cool threshold: ${cool}`);

    let emojiPattern = /(:{2}|\*{2})[A-Z][a-z]{2,}\1/g;
    let emojiArr = array[0].match(emojiPattern);
    console.log(`${emojiArr.length} emojis found in the text. The cool ones are:`);
    for (let curEmoji of emojiArr) {
        let emojiCool = 0;
        let lettersPattern = /[A-Za-z]/g;
        let lettersArr = curEmoji.match(lettersPattern);
        for (let i = 0; i < lettersArr.length; i++) {
            lettersArr[i] = lettersArr[i].charCodeAt();
            emojiCool += lettersArr[i];
        }
        if (emojiCool >= cool) {
            console.log(curEmoji);
        }
    }
    
}

emojiDetector([
    "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
]);
emojiDetector([
    "5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"
]);
emojiDetector([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
]);

