function printAndSum(startNum, endNum) {

    let printNum = '';
    let sum = 0;
    let finalNum = '';

    for (let curNum = startNum; curNum <= endNum; curNum++) {
       printNum = curNum + ' ';
       finalNum += printNum;
       sum += curNum;
    }

    console.log(finalNum);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
