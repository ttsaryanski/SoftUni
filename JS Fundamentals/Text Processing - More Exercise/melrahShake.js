function melrahShake(arr) {

    let str = arr[0];
    let template = arr[1];

    while (template.length > 0 || str.length < template.length * 2) {
        let escapedString = template.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let pattern = new RegExp(escapedString, 'g');
        if (pattern.test(str)) {
            let firstIdx = str.indexOf(template);
            let lastIdx = str.lastIndexOf(template);
            let newStr = str.slice(0, firstIdx);
            newStr += str.slice(firstIdx + template.length, lastIdx);
            newStr += str.slice(lastIdx + template.length);
            str = newStr;
    
            console.log('Shaked it.');

            let idx = Math.floor(template.length / 2);
            template = template.split('');
            template.splice(idx,1);
            template = template.join('');

        } else {
            break;
        }
        
    }

    console.log('No shake.');
    console.log(str);
    
}

melrahShake(['astalavista baby', 'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);
melrahShake(['!.,$%^&*@)><(@.../o$@)@)><(@!(%!@)><(@$,.!', '@)><(@']);

