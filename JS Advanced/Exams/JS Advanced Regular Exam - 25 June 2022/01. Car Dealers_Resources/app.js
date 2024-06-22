window.addEventListener("load", solve);

function solve() {

    let makeRef = document.getElementById('make');
    let modelRef = document.getElementById('model');
    let yearRef = document.getElementById('year');
    let fuelRef = document.getElementById('fuel');
    let costRef = document.getElementById('original-cost');
    let sellRef = document.getElementById('selling-price');
    let pubBtn = document.getElementById('publish');
    pubBtn.addEventListener('click', publish);

    let tBody = document.getElementById('table-body');
    let soldUl = document.getElementById('cars-list');
    let totalProfit = document.getElementById('profit');
    let curProfit = 0;

    function publish(event) {
        event.preventDefault();

        let make = makeRef.value;
        let model = modelRef.value;
        let year = yearRef.value;
        let fuel = fuelRef.value;
        let cost = costRef.value;
        let sell = sellRef.value;

        if (make === '' || model === '' || year === '' || fuel === '' || cost === '' || sell === '' || cost > sell) {
            return;
        }

        let tr = document.createElement('tr');
        tr.classList.add('row');
        let td1 = document.createElement('td');
        td1.textContent = make;
        let td2 = document.createElement('td');
        td2.textContent = model;
        let td3 = document.createElement('td');
        td3.textContent = year;
        let td4 = document.createElement('td');
        td4.textContent = fuel;
        let td5 = document.createElement('td');
        td5.textContent = cost;
        let td6 = document.createElement('td');
        td6.textContent = sell;
        let td7 = document.createElement('td');

        let editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        let sellBtn = document.createElement('button');
        sellBtn.classList.add('action-btn', 'sell');
        sellBtn.textContent = 'Sell';
        sellBtn.addEventListener('click', selling);

        td7.appendChild(editBtn);
        td7.appendChild(sellBtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);

        tBody.appendChild(tr);

        makeRef.value = '';
        modelRef.value = '';
        yearRef.value = '';
        fuelRef.value = '';
        costRef.value = '';
        sellRef.value = '';

        function edit(event) {
            event.currentTarget.parentElement.parentElement.remove();

            makeRef.value = make;
            modelRef.value = model;
            yearRef.value = year;
            fuelRef.value = fuel;
            costRef.value = cost;
            sellRef.value = sell;
        }

        function selling(event) {
            event.currentTarget.parentElement.parentElement.remove();

            let profit = sell - cost;

            let soldLi = document.createElement('li');
            soldLi.classList.add('each-list');
            let span1 = document.createElement('span');
            span1.textContent = `${make} ${model}`;
            let span2 = document.createElement('span');
            span2.textContent = `${year}`;
            let span3 = document.createElement('span');
            span3.textContent = `${profit}`;

            soldLi.appendChild(span1);
            soldLi.appendChild(span2);
            soldLi.appendChild(span3);

            soldUl.appendChild(soldLi);

            curProfit += profit;
            totalProfit.textContent = curProfit.toFixed(2);
        }

    }

}
