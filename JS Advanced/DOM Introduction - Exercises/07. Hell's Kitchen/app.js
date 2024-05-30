function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {

        let bestRestaurantRef = document.getElementById('bestRestaurant');
        let bestRestParagraf = bestRestaurantRef.getElementsByTagName('p')[0];

        let workersRef = document.getElementById('workers');
        let workersParagraf = workersRef.getElementsByTagName('p')[0];

        let inputAreaRef = document.getElementById('inputs');
        let inputValue = inputAreaRef.getElementsByTagName('textarea')[0].value;
        inputValue = JSON.parse(inputValue);

        let listOfRestaurants = {};

        for (const row of inputValue) {
            let [restName, workers] = row.split(' - ');
            workers = workers.split(', ');
            let curWorkersList = [];
            for (const worker of workers) {
                let curWorkerObj = [];
                let [name, salary] = worker.split(' ');
                salary = Number(salary);
                curWorkerObj = [name, salary];
                curWorkersList.push(curWorkerObj);
            }

            if (!listOfRestaurants.hasOwnProperty(restName)) {
                listOfRestaurants[restName] = { averageSalary: 0, bestSalary: 0, workers: curWorkersList };
            } else {
                listOfRestaurants[restName].workers = listOfRestaurants[restName].workers.concat(curWorkersList);
            }
            let averageSalary = 0;
            let bestSalary = 0;
            let sum = 0;
            for (let curWorker of listOfRestaurants[restName].workers) {
                let salary = Number(curWorker[1]);
                sum += salary;
                if (bestSalary < salary) {
                    bestSalary = salary;
                }
            }
            averageSalary = sum / listOfRestaurants[restName].workers.length;
            listOfRestaurants[restName].averageSalary = averageSalary;
            listOfRestaurants[restName].bestSalary = bestSalary;
        }

        let listArr = Object.entries(listOfRestaurants).sort((a, b) => b[1].averageSalary - a[1].averageSalary);
        let bestRest = listArr[0];

        let workersDataArr = bestRest[1].workers.sort((a, b) => b[1] - a[1]);
        let result = ''
        for (const [name, salary] of workersDataArr) {
            result += `Name: ${name} With Salary: ${salary} `
        }

        bestRestParagraf.textContent = `Name: ${bestRest[0]} Average Salary: ${bestRest[1].averageSalary.toFixed(2)} Best Salary: ${bestRest[1].bestSalary.toFixed(2)}`;
        workersParagraf.textContent = result.trim();

    }

}