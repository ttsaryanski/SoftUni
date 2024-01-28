function oldBooks(input) {
    let targetBook = input[0];
    let bookCount = 0;

    let i = 1;
    let command = input[i];

    while (command !== "No More Books") {
        
        if (command === targetBook) {
            console.log(`You checked ${bookCount} books and found it.`);
            break;
        }
        
        bookCount++;
        i++;
        command = input[i];
    } 
    
    if (command !== targetBook) {
    console.log(`The book you search is not here!`);
    console.log(`You checked ${bookCount} books.`);
    }

    
}

// oldBooks(["Troy",
// "Stronger",
// "Life Style",
// "Troy"]);

// oldBooks(["The Spot",
// "Hunger Games",
// "Harry Potter",
// "Torronto",
// "Spotify",
// "No More Books"]);

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);