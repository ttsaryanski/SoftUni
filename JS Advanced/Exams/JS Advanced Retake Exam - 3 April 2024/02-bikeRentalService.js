class BikeRentalService {
    constructor(name, location) {
        this.name = name,
            this.location = location,
            this.availableBikes = []
    }

    addBikes(bikes) {
        let brandList = new Set();
        for (let curBike of bikes) {
            let [brand, qty, price] = curBike.split('-');
            qty = Number(qty);
            price = Number(price);
            let findBrand = this.availableBikes.find(br => br.brand === brand);
            if (findBrand) {
                findBrand.qty += qty;
                if (findBrand.price < price) {
                    findBrand.price = price;
                }
            } else {
                this.availableBikes.push({ brand, qty, price });
            }
            brandList.add(brand);
        }

        let brandListArr = Array.from(brandList);
        return `Successfully added ${brandListArr.join(', ')}`

    }

    rentBikes(selectedBikes) {
        let rentPrice = 0;
        let isNotRent = false;
        let msg = '';
        for (let curBike of selectedBikes) {
            let [brand, qty] = curBike.split('-');
            qty = Number(qty);
            let findBrand = this.availableBikes.find(br => br.brand === brand);
            if (!findBrand || (findBrand && findBrand.qty < qty)) {
                isNotRent = true;
            };
            if (findBrand && findBrand.qty >= qty) {
                let curRentPrice = findBrand.price * qty;
                findBrand.qty -= qty;
                rentPrice += curRentPrice;
            }
        }
        if (isNotRent) {
            msg = "Some of the bikes are unavailable or low on quantity in the bike rental service.";
        } else {
            msg = `Enjoy your ride! You must pay the following amount $${rentPrice.toFixed(2)}.`
        }
        return msg.trim();
    }

    returnBikes(returnedBikes) {
        let msg = '';
        let isNotBrand = false;
        for (let curBike of returnedBikes) {
            let [brand, qty] = curBike.split('-');
            qty = Number(qty);
            let findBrand = this.availableBikes.find(br => br.brand === brand);
            if (!findBrand) {
                isNotBrand = true;
            } else {
                findBrand.qty += qty;
            }
        }
        if (isNotBrand) {
            msg = "Some of the returned bikes are not from our selection.";
        } else {
            msg = "Thank you for returning!";
        }
        return msg.trim();
    }

    revision() {
        let msg = 'Available bikes:\n';
        let sortedBikeList = this.availableBikes.sort((a, b) => a.price - b.price);
        for (let curBike of sortedBikeList) {
            msg += `${curBike.brand} quantity:${curBike.qty} price:$${curBike.price}\n`
        }
        msg += `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`
        return msg.trim();
    }

}

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5"]));

// const rentalService = new BikeRentalService("MyBikes", "CityCenter");
// console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
// console.log(rentalService.rentBikes(["Mountain Bike-2", "City Bike-5", "Stunt Bike-5"]));
// console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3", "Race Bike-5"]));
// console.log(rentalService.revision());

const rentalService = new BikeRentalService("MyBikes", "CityCenter");
console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
console.log(rentalService.rentBikes(["Mountain Bike-5", "City Bike-5"]));
console.log(rentalService.returnBikes(["Mountain Bike-1", "City Bike-3"]));
console.log(rentalService.revision());



