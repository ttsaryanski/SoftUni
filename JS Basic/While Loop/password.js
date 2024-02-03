function password(input) {
    let userName = input[0];
    let password = input[1];
    let insertWord = input[2];

    let i = 3;
    while (insertWord !== password) {
    insertWord = input[i];
    i++;
    }
    console.log(`Welcome ${userName}!`);
    
}

// password(["Nakov",
// "1234",
// "Pass",
// "1324",
// "1234"]);

password(["Gosho",
"secret",
"secret"]);