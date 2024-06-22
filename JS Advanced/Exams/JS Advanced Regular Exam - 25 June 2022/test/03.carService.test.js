import { assert, expect } from "chai";
import { carService } from "../03.carService.js";

describe("Tests for carService", () => {

    describe("isItExpensive", () => {

        it("should return severe issue message for 'Engine'", () => {
            expect(carService.isItExpensive("Engine")).to.equal("The issue with the car is more severe and it will cost more money");
        });

        it("should return severe issue message for 'Transmission'", () => {
            expect(carService.isItExpensive("Transmission")).to.equal("The issue with the car is more severe and it will cost more money");
        });

        it("should return cheaper price message for other issues", () => {
            expect(carService.isItExpensive("Brakes")).to.equal("The overall price will be a bit cheaper");
        });
    });

    describe("discount", () => {

        it("should throw an error for invalid inputs", () => {
            expect(() => carService.discount("two", 100)).to.throw("Invalid input");
            expect(() => carService.discount(3, "one hundred")).to.throw("Invalid input");
        });

        it("should return no discount message for 2 or fewer parts", () => {
            expect(carService.discount(2, 100)).to.equal("You cannot apply a discount");
        });

        it("should apply a 15% discount for 3-7 parts", () => {
            expect(carService.discount(3, 100)).to.equal("Discount applied! You saved 15$");
            expect(carService.discount(7, 200)).to.equal("Discount applied! You saved 30$");
        });

        it("should apply a 30% discount for more than 7 parts", () => {
            expect(carService.discount(8, 300)).to.equal("Discount applied! You saved 90$");
        });
    });

    describe("partsToBuy", () => {
        
        it("should throw an error for invalid inputs", () => {
            expect(() => carService.partsToBuy("catalog", ["part"])).to.throw("Invalid input");
            expect(() => carService.partsToBuy([], "part")).to.throw("Invalid input");
        });

        it("should return 0 if partsCatalog is empty", () => {
            expect(carService.partsToBuy([], ["part"])).to.equal(0);
        });

        it("should return the total price of needed parts", () => {
            const partsCatalog = [
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 }
            ];
            const neededParts = ["blowoff valve", "coil springs"];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(375);
        });

        it("should ignore parts not in the catalog", () => {
            const partsCatalog = [
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 }
            ];
            const neededParts = ["blowoff valve", "injectors"];
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(145);
        });
    });
});