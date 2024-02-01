function repeatString(str, count) {

    let result = '';
    for (let repeat = 1; repeat <= count; repeat++) {
        result += str;
    }

    return result;

}

repeatString("abc", 3);
repeatString("String", 2);
