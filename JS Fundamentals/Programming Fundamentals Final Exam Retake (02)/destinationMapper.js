function destinationMapper(input) {

    let destinationPattern = /(=|\/)[A-Z][A-Za-z]{2,}\1/g;
    let destination = [];
    let points = 0;

    if (destinationPattern.test(input)) {
        destination = input.match(destinationPattern);
        for (let i = 0; i < destination.length; i++) {
            destination[i] = destination[i].slice(1, destination[i].length - 1);
        }
        console.log(`Destinations: ${destination.join(', ')}`);
        for (let curDestination of destination) {
            points += curDestination.length;
        }
        console.log(`Travel Points: ${points}`);
    } else {
        console.log(`Destinations: ${destination.join(', ')}`);
        console.log(`Travel Points: ${points}`);
    }
    
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");
