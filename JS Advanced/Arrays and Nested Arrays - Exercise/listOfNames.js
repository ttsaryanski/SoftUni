function listOfNames(array) {

    array = array.sort((a, b) => a.localeCompare(b));
    array.forEach((element, i) => {
        console.log(`${i + 1}.${element}`);
    });
    
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
