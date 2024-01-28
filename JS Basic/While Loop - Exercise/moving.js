function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let fullArea = width * length * height;
    let occupiedArea = 0;

    let i = 3;
    let command = input[i];

    while (command !== "Done") {
        let box = Number(input[i]);
        i++;
        command = input[i];
        occupiedArea += box;
        if (fullArea <= occupiedArea) {
            console.log(`No more free space! You need ${occupiedArea - fullArea} Cubic meters more.`);
            break;
        }

    }

    if (command === "Done") {
        if (fullArea > occupiedArea) {
            console.log(`${fullArea - occupiedArea} Cubic meters left.`);
        }
    }
    
}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);

// moving(["10", 
// "1",
// "2",
// "4", 
// "6",
// "Done"]);