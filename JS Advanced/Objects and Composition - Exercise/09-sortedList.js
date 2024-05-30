function sortedList() {

    let numbers = [];

    return {
        add: function(num) {
            numbers.push(num);
            numbers.sort((a, b) => a - b);
        },
        remove: function(index) {
            if (index >= 0 && index < numbers.length) {
                numbers.splice(index, 1);
            }
        },
        get: function(index) {
            if (index >= 0 && index < numbers.length) {
                return numbers[index];
            }
        },
        get size() {
            return numbers.length;
        }
    };
    
}

let list = sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
