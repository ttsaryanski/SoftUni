class List {
    constructor(list = []) {
        this.list = list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    add(el) {
        this.list.push(el);
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(idx) {
        if (idx >= 0 && idx < this.list.length) {
            this.list.splice(idx, 1);
            this.size--;
            return;
        }
    }

    get(idx) {
        if (idx >= 0 && idx < this.list.length) {
            return this.list[idx];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
