function commandProcessor() {

    let result = '';

    return {
        append: (string) => result += string,
        removeStart: (idx) => result = result.slice(idx),
        removeEnd: (idx) => result = result.slice(0, result.length - idx),
        print: () => console.log(result)
    };

    
}

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
