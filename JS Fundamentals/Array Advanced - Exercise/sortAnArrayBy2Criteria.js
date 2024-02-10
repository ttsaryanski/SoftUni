function sortAnArrayBy2Criteria(arr) {

    newArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(newArr.join('\n'));
    
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
