function breakfastRobot() {

    let microelements = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    let library = {
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    let output = '';

    const actions = {
        restock: (microelement, quantity) => {
            microelements[microelement] += quantity;
            output = 'Success'
        },
        prepare: (product, quantity) => {
            let neededQty = true;

            Object.entries(library[product]).forEach(entry => {
                let [microelement, count] = entry;

                if (neededQty && microelements[microelement] < (count * Number(quantity))) {
                    neededQty = false;
                    output = `Error: not enough ${microelement} in stock`;
                }
            })

            if (neededQty) {
                Object.entries(library[product]).forEach(entry => {
                    let [microelement, count] = entry;

                    microelements[microelement] -= count * quantity;
                })

                output = 'Success';
            }
        },
        report: () => {
            output = '';

            Object.entries(microelements).forEach(entry => {
                let [microelement, quantity] = entry;

                output += `${microelement}=${quantity} `;
            })
            output = output.trim();
        }
    }

    return function (input) {
        let [command, product, quantity] = input.split(' ');
        quantity = Number(quantity);

        actions[command](product, quantity);

        return output;
    }


}

let manager = breakfastRobot();
// console.log(manager("restock flavour 50"));
// console.log(manager("prepare lemonade 4"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));

