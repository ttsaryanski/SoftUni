function argumentInfo(...args) {

    let result = {};

    for (const arg of args) {
        let type = typeof(arg);
        console.log(`${type}: ${arg}`);

        if (!result.hasOwnProperty(type)) {
            result[type] = 0;
        }
        result[type] += 1; 
    }

    sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);
    sortedResult.forEach(el => {
        let [type, count] = el;
        console.log(`${type} = ${count}`);
    });
    
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });
