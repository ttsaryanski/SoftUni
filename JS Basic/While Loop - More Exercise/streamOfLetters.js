function streamOfLetters(input) {

    let result = '';
    let world = '';

    let isLetterC = true;
    let isLetterO = true;
    let isLetterN = true;

    let i = 0;
    let letter = input[i];
    while (letter !== 'End') {
        let firstCondition = letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
        let secondCondition = letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;
        if (firstCondition || secondCondition) {
            if (letter === 'c') {
                if (isLetterC) {
                    isLetterC = false
                } else {
                    world += letter;
                }
            } else if (letter === 'o') {
                if (isLetterO) {
                    isLetterO = false
                } else {
                    world += letter;
                }
            } else if (letter === 'n') {
                if (isLetterN) {
                    isLetterN = false
                } else {
                    world += letter;
                }
            } else {
                world += letter;
            }
        }
        if (!isLetterC && !isLetterO && !isLetterN) {
            result += `${world} `
            world = '';
            isLetterC = true;
            isLetterO = true;
            isLetterN = true;
        }
        i++;
        letter = input[i];
    }
    console.log(result);

}

//streamOfLetters(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 't', 'c', 'h', 'o', 'e', 'r', 'e', 'n', 'e', 'End']);
streamOfLetters(["%", "!", 'c', "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "\\", "A", "D", 'End']);