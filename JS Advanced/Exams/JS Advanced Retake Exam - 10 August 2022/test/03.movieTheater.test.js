import { assert, expect } from "chai";
import { movieTheater } from "../03.movieTheater.js";

describe("Tests for movieTheater object", () => {

    describe("Tests for ageRestrictions function", () => {

        it("should return 'All ages admitted to watch the movie' for 'G' rating", () => {
            expect(movieTheater.ageRestrictions("G")).to.equal("All ages admitted to watch the movie");
        });

        it("should return 'Parental guidance suggested! Some material may not be suitable for pre-teenagers' for 'PG' rating", () => {
            expect(movieTheater.ageRestrictions("PG")).to.equal("Parental guidance suggested! Some material may not be suitable for pre-teenagers");
        });

        it("should return 'Restricted! Under 17 requires accompanying parent or adult guardian' for 'R' rating", () => {
            expect(movieTheater.ageRestrictions("R")).to.equal("Restricted! Under 17 requires accompanying parent or adult guardian");
        });

        it("should return 'No one under 17 admitted to watch the movie' for 'NC-17' rating", () => {
            expect(movieTheater.ageRestrictions("NC-17")).to.equal("No one under 17 admitted to watch the movie");
        });

        it("should return 'There are no age restrictions for this movie' for other ratings", () => {
            expect(movieTheater.ageRestrictions("X")).to.equal("There are no age restrictions for this movie");
        });
    });

    describe("Tests for moneySpent function", () => {

        it("should calculate the total cost without discount", () => {
            expect(movieTheater.moneySpent(2, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal("The total cost for the purchase is 44.50");
        });

        it("should calculate the total cost with discount", () => {
            expect(movieTheater.moneySpent(4, ["Nachos", "Popcorn"], ["Soda", "Water"])).to.equal("The total cost for the purchase with applied discount is 59.60");
        });

        it("should throw an error for invalid tickets input", () => {
            expect(() => movieTheater.moneySpent("2", ["Nachos", "Popcorn"], ["Soda", "Water"])).to.throw("Invalid input");
        });

        it("should throw an error for invalid food input", () => {
            expect(() => movieTheater.moneySpent(2, "Nachos, Popcorn", ["Soda", "Water"])).to.throw("Invalid input");
        });

        it("should throw an error for invalid drinks input", () => {
            expect(() => movieTheater.moneySpent(2, ["Nachos", "Popcorn"], "Soda, Water")).to.throw("Invalid input");
        });
    });

    describe("Tests for reservation function", () => {
        
        it("should return the row number with enough free seats", () => {
            const rows = [{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }];
            expect(movieTheater.reservation(rows, 5)).to.equal(2);
        });

        it("should return the row number with the largest number of enough free seats", () => {
            const rows = [{ rowNumber: 1, freeSeats: 4 }, { rowNumber: 2, freeSeats: 6 }, { rowNumber: 3, freeSeats: 5 }];
            expect(movieTheater.reservation(rows, 5)).to.equal(3);
        });

        // it("should return null if no row has enough free seats", () => {
        //     const rows = [{ rowNumber: 1, freeSeats: 4 }, { rowNumber: 2, freeSeats: 3 }];
        //     expect(movieTheater.reservation(rows, 5)).to.equal(null);
        // });

        it("should throw an error for invalid rowsArray input", () => {
            expect(() => movieTheater.reservation("rows", 5)).to.throw("Invalid input");
        });

        it("should throw an error for invalid neededSeatsCount input", () => {
            expect(() => movieTheater.reservation([{ rowNumber: 1, freeSeats: 4 }], "5")).to.throw("Invalid input");
        });
    });
});