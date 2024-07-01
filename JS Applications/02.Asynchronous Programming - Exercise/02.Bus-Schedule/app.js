function solve() {

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const infoRef = document.getElementsByClassName('info')[0];
    const URI = 'http://localhost:3030/jsonstore/bus/schedule/';
    let busId = 'depot';

    async function depart() {
        try {
            const fullPatch = URI + busId;
            let response = await fetch(fullPatch);
            let data = await response.json();
            infoRef.textContent = `Next stop ${data.name}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            infoRef.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    async function arrive() {
        try {
            const fullPatch = URI + busId;
            let response = await fetch(fullPatch);
            let data = await response.json();
            infoRef.textContent = `Arriving at ${data.name}`;
            busId = data.next;

            departBtn.disabled = false;
            arriveBtn.disabled = true;
        } catch (error) {
            infoRef.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    return {
        depart,
        arrive
    };
}

let result = solve();