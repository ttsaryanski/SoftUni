function evenPositionElements(arr) {

    let result = [];

    arr.forEach((element, idx) => {
        if (idx % 2 === 0) {
            result.push(element)
        }
    });
    console.log(result.join(' '));
    
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);
