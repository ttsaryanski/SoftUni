function valueOfAString(array) {

    let sum = 0;
    let wordArr = array[0].split('');
    let pattern = /[A-Za-z]/;

    for (let letter of wordArr) {
        if (array[1] === 'LOWERCASE') {
            if (letter === letter.toLowerCase() && pattern.test(letter)) {
                sum += letter.charCodeAt(0);
            }
        } else if (array[1] === 'UPPERCASE') {
            if (letter === letter.toUpperCase() && pattern.test(letter)) {
                sum += letter.charCodeAt(0);
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
    
}

valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfAString(['AC/DC', 'UPPERCASE']);
