import { LiftingGas } from "./contracts/gasses/liftingGas";
import { PassiveLift } from "./contracts/lift/passiveLift";

export class Glider implements PassiveLift {
    readonly maxHeight: number;
    readonly descentSpeed: number;
    static readonly liftCoefficient: number = 0.6;

    constructor(maxHeight: number, descentSpeed: number) {
        this.maxHeight = maxHeight;
        this.descentSpeed = descentSpeed;
    }

    public getAltitudeChange(gas: LiftingGas, currentAltitude: number): number {
        return -(this.descentSpeed * (1 - Glider.liftCoefficient));
    }
}
