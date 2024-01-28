function footballLeague(input) {
    let stadiumCapacity = Number(input[0]);
    let fenCount = Number(input[1]);

    let sector = "";
    let sectorAfen = 0;
    let sectorBfen = 0;
    let sectorVfen = 0;
    let sectorGfen = 0;

    for (let i = 2; i < input.length; i++) {
        sector = input[i];
        if (sector === "A") {
            sectorAfen += 1;
        } else if (sector === "B") {
            sectorBfen += 1;
        } else if (sector === "V") {
            sectorVfen += 1;
        } else if (sector === "G") {
            sectorGfen += 1;
        }
    }
    console.log(`${((sectorAfen / fenCount) * 100).toFixed(2)}%`);
    console.log(`${((sectorBfen / fenCount) * 100).toFixed(2)}%`);
    console.log(`${((sectorVfen / fenCount) * 100).toFixed(2)}%`);
    console.log(`${((sectorGfen / fenCount) * 100).toFixed(2)}%`);
    console.log(`${((fenCount / stadiumCapacity) * 100).toFixed(2)}%`);
    
    
}

// footballLeague(["76",
// "10",
// "A",
// "V",
// "V",
// "V",
// "G",
// "B",
// "A",
// "V",
// "B",
// "B"]);

// footballLeague(["93",
// "16",
// "A",
// "V",
// "G",
// "G",
// "B",
// "B",
// "G",
// "B",
// "A",
// "B",
// "B",
// "B",
// "A",
// "B",
// "B",
// "A"]);

footballLeague(["1000",
"12",
"A",
"A",
"V",
"V",
"A",
"G",
"A",
"A",
"V",
"G",
"V",
"A"]);
