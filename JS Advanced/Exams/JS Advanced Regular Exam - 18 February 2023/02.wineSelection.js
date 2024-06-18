class WineSelection {
    constructor(space) {
        this.space = space,
        this.wines = [],
        this.bill = 0
    }

    reserveABottle (wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error("Not enough space in the cellar.");
        } else {
            this.wines.push({ wineName, wineType, price, paid: false });
        }
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle( wineName, price ) {
        let findWine = this.wines.find(el => el.wineName === wineName);
        if (!findWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (findWine.paid === true) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            findWine.paid = true;
            this.bill += price;
        }
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        let findWine = this.wines.find(el => el.wineName === wineName);
        if (!findWine) {
            throw new Error("The wine, you're looking for, is not found.");
        }
        if (findWine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        } else {
            let idx = this.wines.indexOf(findWine);
            this.wines.splice(idx, 1);
        }
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        let msg = '';
        if (!wineType) {
            let emptySlots = this.space - this.wines.length;
            msg += `You have space for ${emptySlots} bottles more.\n`;
            msg += `You paid ${this.bill}$ for the wine.\n`;
            let sortedList = Array.from(this.wines).sort((a, b) => a.wineName.localeCompare(b.wineName));
            for (let curWine of sortedList) {
                if (curWine.paid === false) {
                    msg += `${curWine.wineName} > ${curWine.wineType} - Not Paid.\n`;
                } else {
                    msg += `${curWine.wineName} > ${curWine.wineType} - Has Paid.\n`;
                }
            }
        } else {
            let list = Array.from(this.wines).filter(el => el.wineType === wineType);
            if (list.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            } else {
                for (let curWine of list) {
                    if (curWine.paid === false) {
                        msg += `${curWine.wineName} > ${curWine.wineType} - Not Paid.\n`;
                    } else {
                        msg += `${curWine.wineName} > ${curWine.wineType} - Has Paid.\n`;
                    }
                }
            }
        }
        return msg.trim();
    }
}



// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

const selection = new WineSelection(2)
console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
console.log(selection.cellarRevision('Rose'));

// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());
