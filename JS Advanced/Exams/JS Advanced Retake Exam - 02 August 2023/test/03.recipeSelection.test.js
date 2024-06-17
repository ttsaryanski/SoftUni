import { assert, expect } from "chai";
import { recipeSelection } from "../03.recipeSelection.js";

describe("Tests for recipeSelection", () => {
    describe("isTypeSuitable", () => {
        it("should return not suitable for vegetarians", () => {
            expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal("This recipe is not suitable for vegetarians");
        });

        it("should return not suitable for vegans (Meat)", () => {
            expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal("This recipe is not suitable for vegans");
        });

        it("should return not suitable for vegans (Dairy)", () => {
            expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal("This recipe is not suitable for vegans");
        });

        it("should return suitable for any other combinations", () => {
            expect(recipeSelection.isTypeSuitable("Vegetable", "Vegetarian")).to.equal("This recipe is suitable for your dietary restriction");
            expect(recipeSelection.isTypeSuitable("Grain", "Vegan")).to.equal("This recipe is suitable for your dietary restriction");
        });

        it("should throw error for invalid input", () => {
            expect(() => recipeSelection.isTypeSuitable(123, "Vegetarian")).to.throw("Invalid input");
            expect(() => recipeSelection.isTypeSuitable("Meat", 123)).to.throw("Invalid input");
        });
    });

    describe("isItAffordable", () => {
        it("should return not enough budget", () => {
            expect(recipeSelection.isItAffordable(100, 50)).to.equal("You don't have enough budget to afford this recipe");
        });

        it("should return ingredients bought with remaining budget", () => {
            expect(recipeSelection.isItAffordable(50, 100)).to.equal("Recipe ingredients bought. You have 50$ left");
            expect(recipeSelection.isItAffordable(50.5, 100)).to.equal("Recipe ingredients bought. You have 49.5$ left");
        });

        it("should throw error for invalid input", () => {
            expect(() => recipeSelection.isItAffordable("100", 50)).to.throw("Invalid input");
            expect(() => recipeSelection.isItAffordable(100, "50")).to.throw("Invalid input");
        });
    });

    describe("getRecipesByCategory", () => {
        it("should return filtered recipes by category", () => {
            const recipes = [
                { title: "Spicy Tofu Stir-Fry", category: "Asian" },
                { title: "Pasta Carbonara", category: "Italian" },
                { title: "Sushi", category: "Asian" }
            ];
            expect(recipeSelection.getRecipesByCategory(recipes, "Asian")).to.deep.equal(["Spicy Tofu Stir-Fry", "Sushi"]);
        });

        it("should return empty array if no recipes match category", () => {
            const recipes = [
                { title: "Spicy Tofu Stir-Fry", category: "Asian" },
                { title: "Pasta Carbonara", category: "Italian" }
            ];
            expect(recipeSelection.getRecipesByCategory(recipes, "Mexican")).to.deep.equal([]);
        });

        it("should throw error for invalid input", () => {
            expect(() => recipeSelection.getRecipesByCategory("not an array", "Asian")).to.throw("Invalid input");
            expect(() => recipeSelection.getRecipesByCategory([], 123)).to.throw("Invalid input");
        });
    });
});
