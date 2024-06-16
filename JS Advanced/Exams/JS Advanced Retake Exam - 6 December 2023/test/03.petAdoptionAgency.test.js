import { assert, expect } from "chai";
import { petAdoptionAgency } from "../03.petAdoptionAgency.js";

describe("Tests for petAdoptionAgency", () => {
    describe("isPetAvailable", () => {
        it("should throw error for invalid input types", () => {
            expect(() => petAdoptionAgency.isPetAvailable(123, 5, true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('Dog', '5', true)).to.throw("Invalid input");
            expect(() => petAdoptionAgency.isPetAvailable('Dog', 5, 'yes')).to.throw("Invalid input");
        });

        it("should return no pets available message when availableCount is 0 or less", () => {
            expect(petAdoptionAgency.isPetAvailable('Dog', 0, true)).to.equal('Sorry, there are no Dog(s) available for adoption at the agency.');
            expect(petAdoptionAgency.isPetAvailable('Dog', -1, true)).to.equal('Sorry, there are no Dog(s) available for adoption at the agency.');
        });

        it("should return message for available vaccinated pets", () => {
            expect(petAdoptionAgency.isPetAvailable('Dog', 3, true)).to.equal('Great! We have 3 vaccinated Dog(s) available for adoption at the agency.');
        });

        it("should return message for available pets needing vaccination", () => {
            expect(petAdoptionAgency.isPetAvailable('Dog', 3, false)).to.equal('Great! We have 3 Dog(s) available for adoption, but they need vaccination.');
        });
    });

    describe("getRecommendedPets", () => {
        it("should throw error for invalid input types", () => {
            expect(() => petAdoptionAgency.getRecommendedPets('invalid', 'friendly')).to.throw("Invalid input");
            expect(() => petAdoptionAgency.getRecommendedPets([{ name: 'Buddy', traits: ['friendly'] }], 123)).to.throw("Invalid input");
        });

        it("should return recommended pets with desired traits", () => {
            const pets = [{ name: 'Max', traits: 'friendly' }];
            expect(petAdoptionAgency.getRecommendedPets(pets, 'friendly')).to.equal('Recommended pets with the desired traits (friendly): Max');
        });

        it("should return no recommended pets message if none match the desired traits", () => {
            const pets = [
                { name: 'Buddy', traits: ['playful'] },
                { name: 'Max', traits: ['shy'] },
                { name: 'Luna', traits: ['shy'] }
            ];
            expect(petAdoptionAgency.getRecommendedPets(pets, 'friendly')).to.equal('Sorry, we currently have no recommended pets with the desired traits: friendly.');
        });
    });

    describe("adoptPet", () => {
        it("should throw error for invalid input types", () => {
            expect(() => petAdoptionAgency.adoptPet(123, 'John')).to.throw("Invalid input");
            expect(() => petAdoptionAgency.adoptPet('Dog', 456)).to.throw("Invalid input");
        });

        it("should return success message for valid adoption", () => {
            expect(petAdoptionAgency.adoptPet('Dog', 'John')).to.equal('Congratulations, John! You have adopted Dog from the agency. Enjoy your time with your new furry friend!');
        });
    });
});
