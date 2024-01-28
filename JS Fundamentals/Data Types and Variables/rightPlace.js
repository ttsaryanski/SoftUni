function rightPlace(basis, char, target) {

    let newWord = basis.replace('_', char);

    newWord === target ? console.log("Matched") : console.log("Not Matched");
    
    // if (newWord === target) {
    //     console.log("Matched");
    // } else {
    //     console.log("Not Matched");
    // }
    
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');
