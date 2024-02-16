function shoppingList(array) {

    let list = array.shift().split('!');
    
    for (let token of array) {
        if (token !== 'Go Shopping!') {
            let[command, product1, product2] = token.split(' ');
            switch (command) {
                case 'Urgent':
                    if (!list.includes(product1)) {
                        list.unshift(product1);
                    }
                    break;
                case 'Unnecessary':
                    if (list.includes(product1)) {
                        let idx = list.indexOf(product1);
                        list.splice(idx, 1);
                        break;
                    }
                case 'Correct':
                    if (list.includes(product1)) {
                        let idx = list.indexOf(product1);
                        list[idx] = product2;
                        break;
                    }
                case 'Rearrange':
                    if (list.includes(product1)) {
                        let idx = list.indexOf(product1);
                        let tmp = product1;
                        list.splice(idx, 1);
                        list.push(tmp);
                        break;
                    }
            }
        } else {
            console.log(list.join(', '));
        }
    }
    
}

shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);
shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]);
