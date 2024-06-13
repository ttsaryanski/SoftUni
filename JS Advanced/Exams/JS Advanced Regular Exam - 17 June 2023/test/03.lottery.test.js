import { assert, expect } from "chai";
import { lottery } from "../03.lottery.js";

describe("Tests for Lottery object", () => {
    describe("buyLotteryTicket", () => {
        it("should throw an error for invalid inputs", () => {
            expect(() => lottery.buyLotteryTicket('10', 5, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(10, '5', true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(10, 5, 'true')).to.throw("Invalid input!");
        });

        it("should throw an error if buy is false", () => {
            expect(() => lottery.buyLotteryTicket(10, 5, false)).to.throw("Unable to buy lottery ticket!");
        });

        it("should throw an error for invalid ticket price or count", () => {
            expect(() => lottery.buyLotteryTicket(0, 5, true)).to.throw("Invalid input!");
            expect(() => lottery.buyLotteryTicket(10, 0, true)).to.throw("Invalid input!");
        });

        it("should return the correct message for valid inputs", () => {
            expect(lottery.buyLotteryTicket(10, 5, true)).to.equal("You bought 5 tickets for 50$.");
        });
    });

    describe("checkTicket", () => {
        it("should throw an error for invalid inputs", () => {
            expect(() => lottery.checkTicket('123456', [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '123456')).to.throw("Invalid input!");
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.throw("Invalid input!");
        });

        it("should return 'You win the JACKPOT!!!' if all numbers match", () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal("You win the JACKPOT!!!");
        });

        it("should return 'Congratulations you win, check your reward!' if 3 to 5 numbers match", () => {
            expect(lottery.checkTicket([1, 2, 3, 7, 8, 9], [1, 2, 3, 4, 5, 6])).to.equal("Congratulations you win, check your reward!");
            expect(lottery.checkTicket([1, 2, 3, 4, 7, 8], [1, 2, 3, 4, 5, 6])).to.equal("Congratulations you win, check your reward!");
        });

        
    });

    describe("secondChance", () => {
        it("should throw an error for invalid inputs", () => {
            expect(() => lottery.secondChance('1', [1, 2, 3])).to.throw("Invalid input!");
            expect(() => lottery.secondChance(1, '123')).to.throw("Invalid input!");
        });

        it("should return 'You win our second chance prize!' if ticketID is in secondChanceWinningIDs", () => {
            expect(lottery.secondChance(1, [1, 2, 3])).to.equal("You win our second chance prize!");
        });

        it("should return 'Sorry, your ticket didn't win!' if ticketID is not in secondChanceWinningIDs", () => {
            expect(lottery.secondChance(4, [1, 2, 3])).to.equal("Sorry, your ticket didn't win!");
        });
    });
});