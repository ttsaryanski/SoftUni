class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse,
        this.location = location,
        this.productStock = []
    }

    addProduct(productName, size, quantity, price) {
        let findProduct = this.productStock.find(el => el.productName === productName && el.size === size);
        if (!findProduct) {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
        findProduct.quantity += quantity;
        return `You added ${quantity} more pieces of product ${productName} size ${size}`;
    }

    sendProduct(productName, size) {
        let findProduct = this.productStock.find(el => el.productName === productName && el.size === size);
        if (!findProduct) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
        let idx = this.productStock.indexOf(findProduct);
        this.productStock.splice(idx, 1);
        return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }

    findProductsBySize(size) {
        let findProduct = this.productStock.find(el => el.size === size);
        if (!findProduct) {
            return `There are no products available in that size`;
        }
        let list = this.productStock.filter(el => el.size === size);
        let result = []
        for (let product of list) {
            result.push(`${product.productName}-${product.quantity} pieces`)
        }
        return result.join(', ').trim();
    }

    listProducts() {
        if (this.productStock.length === 0) {
            return `${this.storehouse} storehouse is empty`
        }
        let msg = `${this.storehouse} storehouse in ${this.location} available products:\n`;
        let sortedList = Array.from(this.productStock).sort((a, b) => a.productName.localeCompare(b.productName));
        for (let product of sortedList) {
            msg += `${product.productName}/Size:${product.size}/Quantity:${product.quantity}/Price:${product.price}$\n`
        }
        return msg.trim();
    }
}

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());


