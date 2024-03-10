function pascalCaseSplitter(str) {

    let arr = str.split('');
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (/^[A-Z]$/.test(arr[i])) {
            result += ' ' + arr[i];
        } else {
            result += arr[i];
        }
    }
    console.log(result.split(' ').join(', '));
    
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
