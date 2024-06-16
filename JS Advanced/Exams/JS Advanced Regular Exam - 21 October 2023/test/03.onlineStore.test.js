import { assert, expect } from "chai";
import { onlineStore } from "../03.onlineStore.js";

describe("Tests for onlineStore", () => {
    describe("isProductAvailable", () => {
        it("should throw error for invalid input types", () => {
            expect(() => onlineStore.isProductAvailable(123, 5)).to.throw("Invalid input.");
            expect(() => onlineStore.isProductAvailable('Laptop', '5')).to.throw("Invalid input.");
        });

        it("should return out of stock message when stockQuantity is 0 or less", () => {
            expect(onlineStore.isProductAvailable('Laptop', 0)).to.equal('Sorry, Laptop is currently out of stock.');
            expect(onlineStore.isProductAvailable('Laptop', -1)).to.equal('Sorry, Laptop is currently out of stock.');
        });

        it("should return available for purchase message when stockQuantity is greater than 0", () => {
            expect(onlineStore.isProductAvailable('Laptop', 5)).to.equal('Great! Laptop is available for purchase.');
        });
    });

    describe("canAffordProduct", () => {
        it("should throw error for invalid input types", () => {
            expect(() => onlineStore.canAffordProduct('100', 500)).to.throw("Invalid input.");
            expect(() => onlineStore.canAffordProduct(100, '500')).to.throw("Invalid input.");
        });

        it("should return insufficient funds message when accountBalance is less than productPrice", () => {
            expect(onlineStore.canAffordProduct(600, 500)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it("should return success message with remaining balance when accountBalance is greater than or equal to productPrice", () => {
            expect(onlineStore.canAffordProduct(400, 500)).to.equal('Product purchased. Your remaining balance is $100.');
            expect(onlineStore.canAffordProduct(500, 500)).to.equal('Product purchased. Your remaining balance is $0.');
        });
    });

    describe("getRecommendedProducts", () => {
        it("should throw error for invalid input types", () => {
            expect(() => onlineStore.getRecommendedProducts('invalid', 'Electronics')).to.throw("Invalid input.");
            expect(() => onlineStore.getRecommendedProducts([{ name: 'Camera', category: 'Photography' }], 123)).to.throw("Invalid input.");
        });

        it("should return recommended products in the specified category", () => {
            const products = [
                { name: 'Camera', category: 'Photography' },
                { name: 'Laptop', category: 'Electronics' },
                { name: 'Smartphone', category: 'Electronics' }
            ];
            expect(onlineStore.getRecommendedProducts(products, 'Electronics')).to.equal('Recommended products in the Electronics category: Laptop, Smartphone');
        });

        it("should return no recommended products message if none match the specified category", () => {
            const products = [
                { name: 'Camera', category: 'Photography' },
                { name: 'Laptop', category: 'Electronics' }
            ];
            expect(onlineStore.getRecommendedProducts(products, 'Furniture')).to.equal('Sorry, we currently have no recommended products in the Furniture category.');
        });
    });
});
