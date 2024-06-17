class InventoryManager {
    constructor(capacity) {
        this.capacity = capacity,
        this.items = [];
        this.outOfStock = []
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (this.items.length >= this.capacity) {
            throw new Error("The inventory is already full.");
        } else {
            let findItem = this.items.find(el => el.itemName === itemName);
            if (!findItem) {
                this.items.push({ itemName, quantity });
            } else {
                findItem.quantity += quantity;
            }
        }
        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        let findItem = this.items.find(el => el.itemName === itemName);
        if (!findItem) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        } else {
            if (quantity > findItem.quantity) {
                throw new Error(`Not enough ${itemName}(s) in stock.`)
            } else {
                findItem.quantity -= quantity;
                if (findItem.quantity === 0) {
                    this.outOfStock.push(itemName);
                    let idx = this.items.indexOf(findItem);
                    this.items.splice(idx, 1);
                }
            }
        }
        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        let findItem = this.items.find(el => el.itemName === itemName);
        if (findItem) {
            findItem.quantity += quantity;
        } else {
            this.items.push({ itemName, quantity });
        }
        let findItemInOutOfStock = this.outOfStock.find(el => el === itemName);
        if (findItemInOutOfStock) {
            let idx = this.outOfStock.indexOf(findItemInOutOfStock);
            this.outOfStock.splice(idx, 1);
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }

    getInventorySummary() {
        let msg = 'Current Inventory:\n';
        for (let item of this.items) {
            msg += `${item.itemName}: ${item.quantity}\n`;
        }
        if (this.outOfStock.length > 0) {
            msg += `Out of Stock: ${this.outOfStock.join(', ')}`;
        }
        return msg.trim();
    }

}


// const manager = new InventoryManager(2);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Paintbrush", 2));

// const manager = new InventoryManager(3);
// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

const manager = new InventoryManager(3);
console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Drill", 3));
console.log(manager.sellItem("Hammer", 5));
console.log(manager.restockItem("Drill", 5));
console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());



