function cutAndReverse(word) {

    let idx = word.length / 2;

    let leftWord = word.slice(0, idx).split('').reverse().join('');
    let rightWord = word.slice(idx).split('').reverse().join('');

    console.log(leftWord);
    console.log(rightWord);
    
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')