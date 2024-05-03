function rageQuit(params) {

    let symbolsArr = [];
    let result = '';
    let pattern = /([\D]+[0-9]+)/g;
    while ((exec = pattern.exec(params)) !== null) {
        let matches = exec[0];
        let symbolsPattern = /(?<symbols>[\D]+)(?<repeating>[0-9]+)/g;
        while ((exec = symbolsPattern.exec(matches)) !== null) {
            let symbols = exec.groups.symbols;
            let repeating = Number(exec.groups.repeating);
            symbols = symbols.toUpperCase();
            for (let i = 0; i < symbols.length; i++) {
                if (!symbolsArr.includes(symbols[i]) && repeating > 0) {
                    symbolsArr.push(symbols[i]);
                }
            }
            result += `${symbols.repeat(repeating)}`;
        }
    }
    console.log(`Unique symbols used: ${symbolsArr.length}`);
    console.log(result);
    
}

rageQuit('a3');
rageQuit('aSd2&5s@1');

