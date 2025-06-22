//DO NOT CHANGE
export interface PassiveLift {
    readonly maxHeight: number;
    getAltitudeChange(gas?: {readonly liftingPower: number}, altitude?: number): number;
}