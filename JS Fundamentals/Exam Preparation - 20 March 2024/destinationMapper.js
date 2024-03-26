function destinationMapper(input) {

    let destinationPattern = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let destination = [];
    let points = 0;

    let exec = destinationPattern.exec(input);
    while (exec) {
        let tmp = exec.groups.name;
        destination.push(tmp);

        exec = destinationPattern.exec(input);
    }
    console.log(`Destinations: ${destination.join(', ')}`);
    for (let curDestination of destination) {
        points += curDestination.length;
    }
    console.log(`Travel Points: ${points}`);
    
    
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");