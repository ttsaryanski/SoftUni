import { assert, expect } from "chai";
import { chooseYourCar } from "../03.chooseYourCar.js";

describe("Tests chooseYourCar", () => {

    describe("choosingType", () => {

        it("should throw error for invalid year", () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 1899)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 2023)).to.throw('Invalid Year!');
        });

        it("should throw error for invalid type", () => {
            expect(() => chooseYourCar.choosingType('Truck', 'blue', 2020)).to.throw('This type of car is not what you are looking for.');
        });

        it("should return correct message for suitable car", () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).to.equal('This blue Sedan meets the requirements, that you have.');
        });

        it("should return correct message for unsuitable car", () => {
            expect(chooseYourCar.choosingType('Sedan', 'blue', 2009)).to.equal('This Sedan is too old for you, especially with that blue color.');
        });
    });

    describe("brandName", () => {

        it("should throw error for invalid brands array", () => {
            expect(() => chooseYourCar.brandName('not array', 0)).to.throw('Invalid Information!');
        });

        it("should throw error for invalid index", () => {
            expect(() => chooseYourCar.brandName(['BMW', 'Toyota'], 'not a number')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['BMW', 'Toyota'], -1)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.brandName(['BMW', 'Toyota'], 2)).to.throw('Invalid Information!');
        });

        it("should return correct message after removing brand", () => {
            expect(chooseYourCar.brandName(['BMW', 'Toyota', 'Peugeot'], 1)).to.equal('BMW, Peugeot');
        });
    });

    describe("CarFuelConsumption", () => {

        it("should throw error for invalid input", () => {
            expect(() => chooseYourCar.carFuelConsumption('not a number', 5)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, 'not a number')).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(-100, 5)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, -5)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(0, 5)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption(100, 0)).to.throw('Invalid Information!');
            expect(() => chooseYourCar.carFuelConsumption('5', '5')).to.throw('Invalid Information!');
            
        });

        it("should return correct message for efficient car", () => {
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        });

        it("should return correct message for inefficient car", () => {
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal('The car burns too much fuel - 10.00 liters!');
        });
    });
});