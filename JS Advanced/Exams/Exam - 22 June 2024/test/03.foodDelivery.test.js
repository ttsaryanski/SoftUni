import { assert, expect } from "chai";
import { foodDelivery } from "../03.foodDelivery.js";

describe("Tests for foodDelivery object", () => {

    describe("getCategory function", () => {

        it("should return the correct message for Vegan", () => {
            expect(foodDelivery.getCategory("Vegan")).to.equal("Dishes that contain no animal products.");
        });

        it("should return the correct message for Vegetarian", () => {
            expect(foodDelivery.getCategory("Vegetarian")).to.equal("Dishes that contain no meat or fish.");
        });

        it("should return the correct message for Gluten-Free", () => {
            expect(foodDelivery.getCategory("Gluten-Free")).to.equal("Dishes that contain no gluten.");
        });

        it("should return the correct message for All", () => {
            expect(foodDelivery.getCategory("All")).to.equal("All available dishes.");
        });

        it("should throw an error for an invalid category", () => {
            expect(() => foodDelivery.getCategory("Invalid")).to.throw("Invalid Category!");
        });
    });

    describe("addMenuItem function", () => {

        it("should add items within the max price and return the correct message", () => {
            const menu = [{ name: 'Burger', price: 10 }, { name: 'Fries', price: 3 }, { name: 'Salad', price: 5 }];
            expect(foodDelivery.addMenuItem(menu, 5)).to.equal("There are 2 available menu items matching your criteria!");
        });

        it("should throw an error for invalid input types", () => {
            expect(() => foodDelivery.addMenuItem("Invalid", 5)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([], "Invalid")).to.throw("Invalid Information!");
        });

        it("should throw an error if menuItem array is less than 1 item or maxPrice is less than 5", () => {
            expect(() => foodDelivery.addMenuItem([], 10)).to.throw("Invalid Information!");
            expect(() => foodDelivery.addMenuItem([{ name: 'Burger', price: 10 }], 4)).to.throw("Invalid Information!");
        });
    });

    describe("calculateOrderCost function", () => {

        it("should calculate the total cost without discount", () => {
            const shipping = ['standard', 'express'];
            const addons = ['sauce', 'beverage'];
            expect(foodDelivery.calculateOrderCost(shipping, addons, false)).to.equal("You spend $12.50 for shipping and addons!");
        });

        it("should calculate the total cost with discount", () => {
            const shipping = ['standard', 'express'];
            const addons = ['sauce', 'beverage'];
            expect(foodDelivery.calculateOrderCost(shipping, addons, true)).to.equal("You spend $10.63 for shipping and addons with a 15% discount!");
        });

        it("should throw an error for invalid input types", () => {
            expect(() => foodDelivery.calculateOrderCost("Invalid", [], true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost([], "Invalid", true)).to.throw("Invalid Information!");
            expect(() => foodDelivery.calculateOrderCost([], [], "Invalid")).to.throw("Invalid Information!");
        });
    });
});