function passwordGuess(input) {
    let word = input[0];
    let password = "s3cr3t!P@ssw0rd";
    if (word === password) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
passwordGuess(["qwerty"]);
passwordGuess(["s3cr3t!P@ssw0rd"]);
passwordGuess(["s3cr3t!p@ss"]);