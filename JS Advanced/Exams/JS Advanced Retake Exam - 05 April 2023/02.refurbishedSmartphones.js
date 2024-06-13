class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer,
        this.availableSmartphones = [],
        this.soldSmartphones = [],
        this.revenue = 0
    }

    addSmartphone(model, storage, price, condition) {
        if (model === '' || storage < 0 || !Number.isInteger(storage) || price < 0 || condition === '') {
            throw new Error("Invalid smartphone!");
        } else {
            this.availableSmartphones.push({ model, storage, price, condition });
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
        }
    }

    sellSmartphone(model, desiredStorage) {
        let findModel = this.availableSmartphones.find(mod => mod.model === model);
        if (!findModel) {
            throw new Error(`${model} was not found!`)
        } else {
            let storage = findModel.storage;
            let soldPrice = findModel.price;
            if (storage >= desiredStorage) {
                soldPrice = soldPrice;
            } else if ((desiredStorage - storage) <= 128) {
                soldPrice *= 0.90;
            } else if ((desiredStorage - storage) > 128) {
                soldPrice *= 0.80;
            }
            let solldedPhone = { model, storage, soldPrice };
            this.soldSmartphones.push(solldedPhone);
            let idx = this.availableSmartphones.indexOf(findModel);
            this.availableSmartphones.splice(idx, 1);
            this.revenue += soldPrice;

            return `${model} was sold for ${soldPrice.toFixed(2)}$`
        }
    }

    upgradePhones() {
        if (this.availableSmartphones.length > 0) {
            let msg = 'Upgraded Smartphones:\n';
            for (let curPhone of this.availableSmartphones) {
                curPhone.storage = curPhone.storage * 2;
                msg += `${curPhone.model} / ${curPhone.storage} GB / ${curPhone.condition} condition / ${curPhone.price.toFixed(2)}$\n`;
            }
            return msg.trim();
        } else {
            throw new Error('There are no available smartphones!');
        }
    }

    salesJournal(criteria) {
        let sortedArray;
        let msg = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`;
        if (criteria === 'storage') {
            sortedArray = Array.from(this.soldSmartphones).sort((a, b) => b.storage - a.storage);
        } else if (criteria === 'model') {
            sortedArray = Array.from(this.soldSmartphones).sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error("Invalid criteria!")
        };
        msg += `${sortedArray.length} smartphones sold:\n`;
        for (let curPhone of sortedArray) {
            msg += `${curPhone.model} / ${curPhone.storage} GB / ${curPhone.soldPrice.toFixed(2)}$\n`;
        }
        return msg.trim();
    }
    
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));



