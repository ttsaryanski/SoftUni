function solve() {

    let textAreaRef = document.getElementById('input');
    let outputRef = document.getElementById('output');
    let textArr = textAreaRef.value.split('.').filter(el => el.length > 0);

    let result = [];
    while (textArr.length > 3) {
        let group = textArr.splice(0, 3);
        result.push(group)
    }
    result.push(textArr);

    for (const curResult of result) {
        let paragraf = document.createElement('p');
        paragraf.textContent = curResult.join(' ')  + '.';
        outputRef.append(paragraf);
    }


}