import { assert, expect } from "chai";
import { planYourTrip } from '../03.planYourTrip.js';

describe("Tests for planYourTrip", () => {
    
    describe("choosingDestination", () => {
        it("should throw an error for invalid year", () => {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
        });

        it("should throw an error for invalid destination", () => {
            expect(() => planYourTrip.choosingDestination("Beach", "Winter", 2024)).to.throw("This destination is not what you are looking for.");
        });

        it("should return correct message for Winter season", () => {
            const result = planYourTrip.choosingDestination("Ski Resort", "Winter", 2024);
            expect(result).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("should return suggestion message for non-Winter season", () => {
            const result = planYourTrip.choosingDestination("Ski Resort", "Summer", 2024);
            expect(result).to.equal("Consider visiting during the Winter for the best experience at the Ski Resort.");
        });
    });

    describe("exploreOptions", () => {
        it("should throw an error for non-array activities parameter", () => {
            expect(() => planYourTrip.exploreOptions("Skiing", 0)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions("Skiing", {})).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions("Skiing", 'a')).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid activityIndex", () => {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], -1)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 1.5)).to.throw("Invalid Information!");
        });

        it("should return updated activities list", () => {
            const result = planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1);
            expect(result).to.equal("Skiing, Winter Hiking");
        });
    });

    describe("estimateExpenses", () => {
        it("should throw an error for invalid distanceInKilometers", () => {
            expect(() => planYourTrip.estimateExpenses(-100, 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses("100", 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(0, 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses([], 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(null, 2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(undefined, 2)).to.throw("Invalid Information!");
        });

        it("should throw an error for invalid fuelCostPerLiter", () => {
            expect(() => planYourTrip.estimateExpenses(100, -2)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(100, "2")).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(100, [])).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(100, null)).to.throw("Invalid Information!");
            expect(() => planYourTrip.estimateExpenses(100, undefined)).to.throw("Invalid Information!");
        });

        it("should return budget-friendly message for cost <= 500", () => {
            const result = planYourTrip.estimateExpenses(20, 10);
            expect(result).to.equal("The trip is budget-friendly, estimated cost is $200.00.");
        });

        it("should return plan accordingly message for cost > 500", () => {
            const result = planYourTrip.estimateExpenses(100, 6);
            expect(result).to.equal("The estimated cost for the trip is $600.00, plan accordingly.");
        });
    });
});
