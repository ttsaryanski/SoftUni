function tickets(dataArr, sortingCriterion) {

    let result = [];
    
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }

        static sort(arr, sortingCriterion) {
            return arr.sort((a, b) => {
                if (sortingCriterion === 'price') {
                    return a[sortingCriterion] - b[sortingCriterion];
                } else {
                    return a[sortingCriterion].localeCompare(b[sortingCriterion]);
                }
            })
        }
    }

    for (let row of dataArr) {
        let [destination, price, status] = row.split('|');

        let currentTicket = new Ticket(destination, price, status);
        result.push(currentTicket);
    }

    return Ticket.sort(result, sortingCriterion);

}

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
console.log('--------------------------');
console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'));
