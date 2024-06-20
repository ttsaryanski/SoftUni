class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace,
        this.products = [],
        this.sales = []
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }
        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        let findProduct = this.products.find(el => el.product === product);
        if (!findProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        let msg = '';
        if (minimalQuantity <= findProduct.quantity) {
            msg = `You have enough from product ${product}.`;
        } else {
            let difference = minimalQuantity - findProduct.quantity;
            findProduct.quantity = minimalQuantity;
            msg = `You added ${difference} more from the ${product} products.`;
        }
        return msg.trim();
    }

    sellProduct(product) {
        let findProduct = this.products.find(el => el.product === product);
        if (!findProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        findProduct.quantity--;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`
    }

    revision() {
        let msg = '';
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
        }
        msg = `You sold ${this.sales.length} products today!\n`;
        msg += "Products in the warehouse:\n";
        for (let curProduct of this.products) {
            msg += `${curProduct.product}-${curProduct.quantity} more left\n`;
        }
        return msg.trim();
    }
}


// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));
console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());


