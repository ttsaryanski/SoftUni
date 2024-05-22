function distanceBetweenpoints(x1, y1, x2, y2) {

    let result = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
    console.log(Math.sqrt(result));
    
}

distanceBetweenpoints(2, 4, 5, 0);
distanceBetweenpoints(2.34, 15.66, -13.55, -2.9985);
