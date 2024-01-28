function movieRatings(input) {
    let movieCount = Number(input[0]);

    let maxRating = Number.MIN_SAFE_INTEGER;
    let minRating = Number.MAX_SAFE_INTEGER;
    let avgRating = 0;

    let movieNameMaxRating = "";
    let movieNameMinRating = "";

    for (let i = 1; i < input.length; i++) {
        let movieName = input[i];
        i++;
        let rating = Number(input[i]);
        avgRating += rating;
        if (rating > maxRating) {
            movieNameMaxRating = movieName;
            maxRating = rating;
        } else if (rating < minRating) {
            movieNameMinRating = movieName;
            minRating = rating;
        }
    }
    console.log(`${movieNameMaxRating} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${movieNameMinRating} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(avgRating / movieCount).toFixed(1)}`);


}

movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"]);

movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"]);