function colorize() {

    let target = document.getElementsByTagName("tr");

    for (let row = 0;  row < target.length; row++) {
        if (row % 2 !== 0) {
            target[row].style.backgroundColor = "teal";
        }
    }
    
}
