function wordsUppercase(params) {

    let str = params.toUpperCase().match(/\w+/g).join(', ');

    console.log(str);
    
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
