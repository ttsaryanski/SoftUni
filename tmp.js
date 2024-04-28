function test(arr) {

    let tmp = JSON.parse(arr.shift());
    console.log(tmp);
    
}

test(["[1, 2, -3, 4, 5]"]);
