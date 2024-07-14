import { html, render } from './node_modules/lit-html/lit-html.js';

function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    const root = document.querySelector('tbody');

    onClick();

    // async function loadTable() {
    //     const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
    //     const data = await response.json();

    //     const rowsTempl = html`${Object.values(data).map(
    //         (row) => html`
    //             <tr>
    //                 <td>${row.firstName} ${row.lastName}</td>
    //                 <td>${row.email}</td>
    //                 <td>${row.course}</td>
    //             </tr>
    //         `)}`;

    //     render(rowsTempl, root)
    // }


    async function onClick(e) {

        let searchText;
        if (e) {
            searchText = e.target.previousElementSibling.value;
            e.target.previousElementSibling.value = '';
        }
        
        const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
        const data = await response.json();

        const rowsTempl = html`${Object.values(data).map(
            (row) => createTemp(row, searchText))}`;

        render(rowsTempl, root);
    }

    function createTemp(row, searchText) {
        let isMatch;
        if (searchText) {
            searchText = searchText.toLowerCase();
            isMatch = Object.values(row).some(value => searchText && value.toLowerCase().includes(searchText));
        }
        //debugger
        return html`
            <tr class=${isMatch ? 'select' : ''}>
                <td>${row.firstName} ${row.lastName}</td>
                <td>${row.email}</td>
                <td>${row.course}</td>
            </tr>
        `
    }

}

solve();