function movies(array) {

    let movies = [];
    for (let token of array) {
        if (token.includes('addMovie')) {
            let commands = token.split('addMovie ');
            let movieName = commands[1];

            let moveObj = { name: movieName};
            movies.push(moveObj);
        } else if (token.includes('directedBy')) {
            let commands = token.split(' directedBy ');
            let movieName = commands[0];
            let directorName = commands[1];
            
            let nameIsList = movies.find(m => m.name === movieName);
            if (nameIsList) {
                nameIsList.director = directorName;
            }
        } else if (token.includes(' onDate ')) {
            let commands = token.split(' onDate ');
            let movieName = commands[0];
            let dateMovie = commands[1];
            
            let nameIsList = movies.find(m => m.name === movieName);
            if (nameIsList) {
                nameIsList.date = dateMovie;
            }
        }
    }
    let fullInfo = movies.filter(m => m.name && m.director && m.date);
    for (let curMovie of fullInfo) {
        console.log(JSON.stringify(curMovie));
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);
