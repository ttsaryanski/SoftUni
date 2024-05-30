function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {

        let searchBoxRef = document.getElementById('searchField');
        let rowsRef = document.querySelectorAll('tbody tr');

        let searchText = searchBoxRef.value;
        searchBoxRef.value = '';
        for (let row of rowsRef) {
            let rowBoxesRef = row.querySelectorAll('td');
            for (let curBox of rowBoxesRef) {
                if (curBox.textContent.includes(searchText)) {
                    row.classList.add('select');
                    break;
                } else {
                    row.classList.remove('select');
                }
            }
        }


    }
}