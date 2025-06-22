//DO NOT CHANGE
import { PassiveLift } from "../lift/passiveLift.js";

export class HeliumBaloon implements PassiveLift {
    public readonly maxHeight: number;

    constructor(maxHeight: number){
        this.maxHeight = maxHeight;
    }
    
    getAltitudeChange(gas: {readonly liftingPower: number}, altitude: number): number {
        let liftFactor = this.calculateLiftFactor(altitude);
        let lift = gas.liftingPower * liftFactor;
        return lift;
    }

    private calculateLiftFactor(altitude: number): number {
        let liftFactor = 1 - (altitude / this.maxHeight);
        if(altitude >= this.maxHeight) {
            liftFactor = 0;
        }
        return liftFactor;
    }
}