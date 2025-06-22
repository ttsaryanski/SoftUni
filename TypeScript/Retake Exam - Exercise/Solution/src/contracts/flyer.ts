//DO NOT CHANGE
export interface Flyer {
    readonly altitude: number;
    readonly weight: number;
    move(): string;
    checkStatus(): string;
}
