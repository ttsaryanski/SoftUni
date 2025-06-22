//DO NOT CHANGE
import { decorator1, decorator2, decorator3, decorator4 } from "../../decorators.js";
import { ActiveLift } from "../lift/activeLift.js";

@decorator3
export class SolidRocketBooster implements ActiveLift {
    public fuelConsumptionRate: number;
    private _liftPerFuelUnit: number;
    protected _optimalWeight? : number;

    constructor(fuelConsumptionRate: number, liftPerFuelUnit: number, optimalWeight?: number) {
        this.fuelConsumptionRate = fuelConsumptionRate;
        this._liftPerFuelUnit = liftPerFuelUnit;
    }

    @decorator4
    public get optimalWeight(){
        return this._optimalWeight;
    }

    @decorator1
    get liftPerFuelUnit() {
        return this._liftPerFuelUnit;
    }

    @decorator2
    getAltitudeChange(flyerWeight?: number): number {
        let totalLift = this.liftPerFuelUnit * this.fuelConsumptionRate;
        return totalLift;
    }
}