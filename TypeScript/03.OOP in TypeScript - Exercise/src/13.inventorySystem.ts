class Product {
    private static _productCount: number = 0;
    readonly id!: number;
    private _name!: string;
    private _price!: number;

    constructor(name: string, price: number) {
        if (name.length < 1) {
            throw new Error("Name must contain at least 1 character");
        } else if (price <= 0) {
            throw new Error("Price must be positive");
        }

        this.id = ++Product._productCount;
        this._name = name;
        this._price = price;
    }

    static get productCount(): number {
        return Product._productCount;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`;
    }
}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string[] {
        const list = this.products.map((product) => product.getDetails());

        list.push(`Total products created: ${Product.productCount}`);

        return list;
    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts().join("\n"));

// Product.productCount = 10;
// const product = new Product("", 800);
// const product2 = new Product("Phone", 0);
// product.id = 5;
