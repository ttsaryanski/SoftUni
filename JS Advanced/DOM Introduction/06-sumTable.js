function sumTable() {

    let sumRef = document.getElementById("sum");
    let targetRef = document.querySelectorAll("td");
    let num = 0;
    let sum = 0;
    
    for (let i = 1; i < targetRef.length - 1; i++) {
        if (i % 2 !== 0) {
            num = Number(targetRef[i].textContent);
            sum += num;
        }
    }

    sumRef.textContent = sum;

}