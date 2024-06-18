import { assert, expect } from "chai";
import { findNewApartment } from "../03.findApartment.js";

describe("Tests for findNewApartment", () =>  {
    describe("isGoodLocation", () =>  {
        it("should return 'This location is not suitable for you.' if the city is not Sofia, Plovdiv, or Varna", () =>  {
            expect(findNewApartment.isGoodLocation("Burgas", true)).to.equal("This location is not suitable for you.");
        });

        it("should return 'There is no public transport in area.' if nearPublicTransportation is false", () =>  {
            expect(findNewApartment.isGoodLocation("Sofia", false)).to.equal("There is no public transport in area.");
        });

        it("should return 'You can go on home tour!' for valid inputs", () =>  {
            expect(findNewApartment.isGoodLocation("Sofia", true)).to.equal("You can go on home tour!");
        });

        it("should throw an error for invalid inputs", () =>  {
            expect(() => findNewApartment.isGoodLocation(123, true)).to.throw("Invalid input!");
            expect(() => findNewApartment.isGoodLocation("Sofia", "yes")).to.throw("Invalid input!");
        });
    });

    describe("isLargeEnough", () =>  {
        it("should return the apartments larger or equal to minimalSquareMeters", () =>  {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 50)).to.deep.equal('50, 60');
        });

        it("should throw an error for invalid inputs", () =>  {
            expect(() => findNewApartment.isLargeEnough("not an array", 50)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([], 50)).to.throw("Invalid input!");
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], "not a number")).to.throw("Invalid input!");
        });
    });

    describe("isItAffordable", () =>  {
        it("should return 'You don't have enough money for this house!' if the budget is less than the price", () =>  {
            expect(findNewApartment.isItAffordable(1000, 500)).to.equal("You don't have enough money for this house!");
        });

        it("should return 'You can afford this home!' if the budget is greater than or equal to the price", () =>  {
            expect(findNewApartment.isItAffordable(500, 1000)).to.equal("You can afford this home!");
        });

        it("should throw an error for invalid inputs", () =>  {
            expect(() => findNewApartment.isItAffordable("not a number", 1000)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(500, "not a number")).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(-500, 1000)).to.throw("Invalid input!");
            expect(() => findNewApartment.isItAffordable(500, -1000)).to.throw("Invalid input!");
        });
    });
});
