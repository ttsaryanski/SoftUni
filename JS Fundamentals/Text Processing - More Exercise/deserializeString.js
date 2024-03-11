function deserializeString(arr) {

    let stopCommand = arr.pop();
    let length = Number.MIN_SAFE_INTEGER;
    for (let row of arr) {
        let [letter, indexesArr] = row.split(':');
        let indexes = indexesArr.split('/');
        for (let curIdx of indexes) {
            curIdx = Number(curIdx);
            if (curIdx > length) {
                length = curIdx;
            }
        }
    }
    let result = new Array(length).fill('');
    for (let row of arr) {
        let [letter, indexesArr] = row.split(':');
        let indexes = indexesArr.split('/');
        for (let idx of indexes) {
            result[idx] = letter;
        }
    }
    console.log(result.join(''));

}

deserializeString(
    ['a:0/2/4/6',
        'b:1/3/5',
        'end']
);
deserializeString(
    ['a:0/3/5/11',
        'v:1/4',
        'j:2',
        'm:6/9/15',
        's:7/13',
        'd:8/14',
        'c:10',
        'l:12',
        'end']
);
