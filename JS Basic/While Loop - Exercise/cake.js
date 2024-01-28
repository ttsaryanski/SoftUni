function cake(input) {
    let widthCake = Number(input[0]);
    let lengthCake = Number(input[1]);
    let fullCakePiece = widthCake * lengthCake;
    let pieceCount = 0;
    let getCakePiece = 0;
    
    let i = 2;
    let command = input[i];

    while (command !== "STOP") {
        pieceCount = Number(input[i]);
        getCakePiece += pieceCount;
        i++;
        command = input[i];
        if (fullCakePiece <= getCakePiece) {
            console.log(`No more cake left! You need ${getCakePiece - fullCakePiece} pieces more.`);
            break;
        }
    }

    if (command === "STOP") {
        if (fullCakePiece > getCakePiece) {
            console.log(`${fullCakePiece - getCakePiece} pieces are left.`);
        }
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);

cake(["10",
"2",
"2",
"4",
"6",
"STOP"]);