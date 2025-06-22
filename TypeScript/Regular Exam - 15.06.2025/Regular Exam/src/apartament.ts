import { Room } from "./contracts/room";
import { RoomNumber } from "./types";

export class Apartment implements Room {
    private _price: number;
    private _roomNumber: RoomNumber;
    private _numberOfGuests: number;

    constructor(price: number, roomNumber: RoomNumber, numberOfGuests: number) {
        this._price = price;
        this._roomNumber = roomNumber;
        this._numberOfGuests = numberOfGuests;
    }

    get roomNumber(): RoomNumber {
        return this._roomNumber;
    }

    get totalPrice(): number {
        return this._numberOfGuests * this._price;
    }

    get cancellationPrice(): number {
        return this.totalPrice * 0.8;
    }
}
