import { Flyer } from "./contracts/flyer";
import { LiftingGas } from "./contracts/gasses/liftingGas";
import { Propellant } from "./contracts/gasses/propellant";
import { ActiveLift } from "./contracts/lift/activeLift";
import { PassiveLift } from "./contracts/lift/passiveLift";

type Condition = "Active" | "Passive";

export class FlyingMachine<T extends Condition> implements Flyer {
    static TotalMetersMoved: number = 0;
    static get totalMetersMoved(): number {
        return FlyingMachine.TotalMetersMoved;
    }

    readonly lift: T extends "Active" ? ActiveLift : PassiveLift;
    readonly gas: T extends "Active" ? Propellant : LiftingGas;
    protected readonly _baseWeight: number;
    protected _altitude: number;

    constructor(
        lift: T extends "Active" ? ActiveLift : PassiveLift,
        gas: T extends "Active" ? Propellant : LiftingGas,
        baseWeight: number,
        altitude: number
    ) {
        this.lift = lift;
        this.gas = gas;
        this._baseWeight = baseWeight;
        this._altitude = altitude;

        if (altitude < 0) {
            this._altitude = 0;
        } else if (
            this.isPassive() &&
            altitude > (lift as PassiveLift).maxHeight
        ) {
            this._altitude = (lift as PassiveLift).maxHeight;
        } else {
            this._altitude = altitude;
        }
    }

    private isActive(): this is FlyingMachine<"Active"> {
        return this.lift.hasOwnProperty("fuelConsumptionRate");
    }

    private isPassive(): this is FlyingMachine<"Passive"> {
        return this.lift.hasOwnProperty("maxHeight");
    }

    public get weight(): number {
        if (this.isActive()) {
            return this._baseWeight + (this.gas as Propellant).fuelWeight;
        }
        return this._baseWeight;
    }

    public get altitude(): number {
        return this._altitude;
    }

    move(): string {
        let delta: number = 0;

        if (this.isActive()) {
            const propellant = this.gas as Propellant;
            const lift = this.lift as ActiveLift;

            if (propellant.fuelAmount >= lift.fuelConsumptionRate) {
                delta = lift.getAltitudeChange(this.weight);
                propellant.fuelAmount -= lift.fuelConsumptionRate;
            }
        } else {
            const lift = this.lift as PassiveLift;
            delta = lift.getAltitudeChange(
                this.gas as LiftingGas,
                this._altitude
            );
        }

        const originalAltitude = this._altitude;
        this._altitude += delta;

        if (this._altitude < 0) this._altitude = 0;
        if (this.isPassive()) {
            const max = (this.lift as PassiveLift).maxHeight;
            if (this._altitude > max) this._altitude = max;
        }

        const change = Math.abs(this._altitude - originalAltitude);
        FlyingMachine.TotalMetersMoved += change;

        if (change === 0) {
            return "Flyer stayed in place";
        }

        const direction = this._altitude > originalAltitude ? "up" : "down";
        return `Flyer moved ${change.toFixed(2)} meters ${direction}`;
    }

    public checkStatus(): string {
        const altitudeInt = Math.floor(this._altitude);
        const weight = this.weight;

        if (this.isActive()) {
            const fuel = (this.gas as Propellant).fuelAmount;
            return `Flyer altitude: ${altitudeInt} meters\nFlyer weight: ${weight}\nFuel left: ${fuel}`;
        } else {
            const maxHeight = (this.lift as PassiveLift).maxHeight;
            return `Flyer altitude: ${altitudeInt} meters\nFlyer weight: ${weight}\nMax height: ${maxHeight}`;
        }
    }
}
