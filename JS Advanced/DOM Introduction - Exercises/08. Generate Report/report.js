function generateReport() {

    let resultRef = document.getElementById('output');

    let checkboxArr = Array.from(document.getElementsByTagName('input'));

    let dataMatrix = [];
    let dataArr = Array.from(document.querySelectorAll('tbody tr'));
    for (const rowRef of dataArr) {
        let rows = rowRef.getElementsByTagName('td');
        let rowData = [];
        for (const row of rows) {
            rowData.push(row.textContent);
        }
        dataMatrix.push(rowData);
    }

    let result = [];
    for (let row = 0; row < dataMatrix.length; row++) {
        let obj = {};
        for (let col = 0; col < dataMatrix[row].length; col++) {
            if (checkboxArr[col].checked) {
                obj[checkboxArr[col].name] = dataMatrix[row][col];
            }
        }
        result.push(obj)
    }

    resultRef.textContent = JSON.stringify(result, null, 2);
    

}