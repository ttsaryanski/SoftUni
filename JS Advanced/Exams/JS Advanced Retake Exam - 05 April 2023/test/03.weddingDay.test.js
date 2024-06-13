import { assert, expect } from "chai";
import { weddingDay } from "../03.weddingDay.js";

describe("Tests for weddingDay object", () => {

    describe("pickVenue", () => {
        it("should throw an error for invalid input", () => {
            expect(() => weddingDay.pickVenue('not a number', 100, 'Varna')).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(150, 'not a number', 'Varna')).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(150, 100, '')).to.throw("Invalid Information!");
        });

        it("should throw an error for location not in Varna", () => {
            expect(() => weddingDay.pickVenue(150, 100, 'Sofia')).to.throw("The location of this venue is not in the correct area!");
        });

        it("should return a success message for valid input meeting requirements", () => {
            expect(weddingDay.pickVenue(150, 100, 'Varna')).to.equal("This venue meets the requirements, with capacity of 150 guests and 100$ cover.");
        });

        it("should return a failure message for valid input not meeting requirements", () =>  {
            expect(weddingDay.pickVenue(100, 150, 'Varna')).to.equal("This venue does not meet your requirements!");
        });
    });

    describe("otherSpendings", () => {
        it("should throw an error for invalid input", () => {
            expect(() => weddingDay.otherSpendings('not an array', [], true)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings([], 'not an array', true)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings([], [], 'not a boolean')).to.throw("Invalid Information!");
        });

        it("should return the correct total price without discount", () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal("You spend 1200$ for wedding decoration and photography!");
        });

        it("should return the correct total price with discount", () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal("You spend 1020$ for wedding decoration and photography with 15% discount!");
        });
    });

    describe("tableDistribution", () => {
        it("should throw an error for invalid input", () => {
            expect(() => weddingDay.tableDistribution('not a number', 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(10, 'not a number')).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(-10, 10)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(10, -10)).to.throw("Invalid Information!");
        });

        it("should return the correct message for less than 6 people on each table", () => {
            expect(weddingDay.tableDistribution(10, 2)).to.equal("There is only 5 people on every table, you can join some tables.");
        });

        it("should return the correct message for 6 or more people on each table", () => {
            expect(weddingDay.tableDistribution(12, 2)).to.equal("You have 2 tables with 6 guests on table.");
        });
    });

});
