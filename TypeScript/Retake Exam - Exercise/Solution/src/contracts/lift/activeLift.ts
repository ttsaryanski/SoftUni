//DO NOT CHANGE
export interface ActiveLift {
    readonly fuelConsumptionRate: number;
    readonly liftPerFuelUnit: number;
    readonly optimalWeight: number | undefined;
    getAltitudeChange(flyerWeight?: number): number;
}