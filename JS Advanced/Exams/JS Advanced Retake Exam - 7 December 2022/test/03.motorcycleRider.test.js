import { assert, expect } from "chai";
import { motorcycleRider } from "../03.motorcycleRider.js";

describe("Tests motorcycleRider", () => {

    describe("licenseRestriction", () => {
        it("should return correct message for category AM", () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.');
        });

        it("should return correct message for category A1", () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.');
        });

        it("should return correct message for category A2", () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.');
        });

        it("should return correct message for category A", () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.');
        });

        it("should throw an error for invalid category", () => {
            expect(() => motorcycleRider.licenseRestriction('B')).to.throw('Invalid Information!');
        });

        it("should throw an error for non-string input", () => {
            expect(() => motorcycleRider.licenseRestriction(123)).to.throw('Invalid Information!');
        });
    });

    describe("motorcycleShowroom", () => {
        it("should return correct message for available motorcycles", () => {
            expect(motorcycleRider.motorcycleShowroom([125, 250, 600], 300)).to.equal('There are 2 available motorcycles matching your criteria!');
        });

        it("should return correct message when no motorcycles match", () => {
            expect(motorcycleRider.motorcycleShowroom([125, 250, 600], 100)).to.equal('There are 0 available motorcycles matching your criteria!');
        });

        it("should throw an error for invalid engineVolume array", () => {
            expect(() => motorcycleRider.motorcycleShowroom('not array', 300)).to.throw('Invalid Information!');
        });

        it("should throw an error for empty engineVolume array", () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 300)).to.throw('Invalid Information!');
        });

        it("should throw an error for invalid maximumEngineVolume", () => {
            expect(() => motorcycleRider.motorcycleShowroom([125, 250, 600], 'not a number')).to.throw('Invalid Information!');
        });

        it("should throw an error for maximumEngineVolume less than 50", () => {
            expect(() => motorcycleRider.motorcycleShowroom([125, 250, 600], 40)).to.throw('Invalid Information!');
        });
    });

    describe("otherSpendings", () => {
        
        it("should calculate total price without discount", () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal('You spend $600.00 for equipment and consumables!');
        });

        it("should calculate total price with discount", () => {
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil'], true)).to.equal('You spend $513.00 for equipment and consumables with 10% discount!');
        });

        it("should throw an error for invalid equipment array", () => {
            expect(() => motorcycleRider.otherSpendings('not array', ['engine oil', 'oil filter'], true)).to.throw('Invalid Information!');
        });

        it("should throw an error for invalid consumables array", () => {
            expect(() => motorcycleRider.otherSpendings(['helmet'], 'not array', true)).to.throw('Invalid Information!');
        });

        it("should throw an error for invalid discount boolean", () => {
            expect(() => motorcycleRider.otherSpendings(['helmet'], ['engine oil'], 'not boolean')).to.throw('Invalid Information!');
        });
    });
});