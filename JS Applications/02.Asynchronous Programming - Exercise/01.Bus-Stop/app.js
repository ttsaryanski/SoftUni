async function getInfo() {

    const BUS_URI = 'http://localhost:3030/jsonstore/bus/businfo/';
    const inputRef = document.getElementById('stopId');

    const stopNameRef = document.getElementById('stopName');
    const stopUlRef = document.getElementById('buses');

    const fullPatch = BUS_URI + inputRef.value;
    try {
        let response = await fetch(fullPatch);
        let data = await response.json();

        clear();
        stopNameRef.textContent = data.name;
        Object.entries(data.buses).forEach(info => {
            let [busId, time] = info;
            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${time} minutes`;
            stopUlRef.appendChild(li);
        })
    } catch (error) {
        clear();
        stopNameRef.textContent = 'Error';
    }

function clear() {
    inputRef.value = '';
    stopUlRef.innerHTML = '';
}


}