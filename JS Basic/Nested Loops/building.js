function building(input) {
    let floorCount = Number(input[0]);
    let roomCountPerFloor = Number(input[1]);

    

    for (let floorNumber = floorCount; floorNumber >= 1; floorNumber--) {
        let floorString = "";
        for (let roomNumber = 0; roomNumber < roomCountPerFloor; roomNumber++) {
            if (floorNumber === floorCount) {
                floorString += "L" + floorNumber + roomNumber + " ";
            } else if (floorNumber % 2 === 0) {
                floorString += "O" + floorNumber + roomNumber + " ";
            } else {
                floorString += "A" + floorNumber + roomNumber + " ";
            }
            
        }
        console.log(floorString);
    }

}

building(["6", "4"]);
 //building(["9", "5"]);
// building(["4", "4"]);