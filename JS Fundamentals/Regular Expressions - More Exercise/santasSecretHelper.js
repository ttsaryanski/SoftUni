function santasSecretHelper(array) {

    let list = [];
    let diminutive = Number(array.shift());
    let row = array.shift();

    while (row !== 'end') {
        let message = '';
        for (let i = 0; i < row.length; i++) {
            let tmp = row[i].charCodeAt() - diminutive;
            message += String.fromCharCode(tmp);
        }

        let pattern = /@(?<name>[A-Za-z]+)[^@\-!>:]*!(?<behavior>[G|N])!/g;
        while ((exec = pattern.exec(message)) !== null) {
            let name = exec.groups.name;
            let behavior = exec.groups.behavior;
            if (behavior === 'G') {
                list.push(name);
            }
        }
        
        row = array.shift();
    }
    console.log(list.join('\n'));
    
}

santasSecretHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);
santasSecretHelper([
    '3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
]);
santasSecretHelper([
    '4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
    'DReh}e=<4lhzj1%K%',
    'end'
]);
