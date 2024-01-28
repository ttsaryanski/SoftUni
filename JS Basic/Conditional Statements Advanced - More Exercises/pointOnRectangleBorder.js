function pointOnRectangleBorder(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    let point = "";

    if ((x === x1 || x === x2) && (y >= y1 && y <= y2)) {
        point = "Border"
    } else if ((y === y1 || y === y2) && (x >= x1 && x <= x2)) {
        point = "Border"
    } else {
        point = "Inside / Outside"
    }
    
    console.log(point);
    
}

pointOnRectangleBorder(["2", "-3", "12", "3", "8", "-1"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "2", "-1"]);
pointOnRectangleBorder(["2", "-3", "12", "3", "6.28", "-3"]);