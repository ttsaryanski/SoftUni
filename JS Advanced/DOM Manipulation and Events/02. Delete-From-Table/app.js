function deleteByEmail() {

    let inputBoxRef = document.querySelector('input[name=email]');
    let resultRef = document.getElementById('result');

    let tableRef = document.querySelectorAll('tbody tr');
    for (const row of tableRef) {
        let mail = row.querySelectorAll('td')[1].textContent;
        if (mail === inputBoxRef.value) {
            row.remove();
            inputBoxRef.value = '';
            resultRef.textContent = 'Deleted.';
            break;
        } else {
            resultRef.textContent = 'Not found.';
        }
    }
    inputBoxRef.value = '';

    
}