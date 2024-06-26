import { assert, expect } from "chai";
import { cinema } from "../03.cinema.js";

describe("Tests for cinema object", () => {

    describe("showMovies function", () => {

        it("should return a message if there are no movies", () => {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
        });

        it("should return the movies separated by comma and space", () => {
            const movies = ['King Kong', 'The Tomorrow War', 'Joker'];
            expect(cinema.showMovies(movies)).to.equal('King Kong, The Tomorrow War, Joker');
        });
    });

    describe("ticketPrice function", () => {

        it("should return the price for a valid projection type", () => {
            expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
            expect(cinema.ticketPrice("Normal")).to.equal(7.50);
            expect(cinema.ticketPrice("Discount")).to.equal(5.50);
        });

        it("should throw an error for an invalid projection type", () => {
            expect(() => cinema.ticketPrice("InvalidType")).to.throw("Invalid projection type.");
        });
    });

    describe("swapSeatsInHall function", () => {

        it("should return unsuccessful message if firstPlace is not an integer", () => {
            expect(cinema.swapSeatsInHall(1.5, 10)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful message if secondPlace is not an integer", () => {
            expect(cinema.swapSeatsInHall(10, 1.5)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful message if firstPlace is less or equal to 0", () => {
            expect(cinema.swapSeatsInHall(0, 10)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful message if secondPlace is less or equal to 0", () => {
            expect(cinema.swapSeatsInHall(5, 0)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return unsuccessful message if firstPlace is greater than 20", () => {
            expect(cinema.swapSeatsInHall(21, 10)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("should return successful message if both places are valid", () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
        });
    });
});