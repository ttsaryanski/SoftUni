function passwordGenerator(array) {

    let wordArr = (array[0] + array[1]).split('');
    let template = array[2];
    let checkArr = ['a', 'o', 'e', 'i', 'u'];
    let password = '';
    let idx = 0;

    for (let letter of wordArr) {
        if (checkArr.includes(letter)) {
            password += template[idx].toUpperCase();
            idx++;
            if (idx >= template.length) {
                idx = 0;
            }
        } else {
            password += letter;
        }
    }
    password = password.split('').reverse().join('')
    console.log(`Your generated password is ${password}`);

}

passwordGenerator(
    ['ilovepizza', 'ihatevegetables', 'orange']
);
passwordGenerator(
    ['easymoneyeazylife', 'atleasttencharacters', 'absolute']
);
passwordGenerator(
    ['areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed']
);
