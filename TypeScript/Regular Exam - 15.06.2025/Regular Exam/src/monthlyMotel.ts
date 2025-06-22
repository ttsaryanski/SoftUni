import { Motel } from "./contracts/motel";
import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { Room } from "./contracts/room";
import { SummerMonth, WinterMonth } from "./contracts/util";
import { RoomNumber } from "./types";

export class MonthlyMotel<T extends WinterMonth | SummerMonth>
    extends PartialMonthlyMotel
    implements Motel
{
    private rooms: Map<string, Room> = new Map();
    private bookings: Map<string, Set<T>> = new Map();
    private cancellations: Map<string, Set<T>> = new Map();
    private totalBudget: number = 0;

    addRoom(room: unknown): string {
        const isRoom = (obj: unknown): obj is Room => {
            return (
                typeof obj === "object" &&
                obj !== null &&
                "roomNumber" in obj &&
                typeof obj.roomNumber === "string" &&
                "totalPrice" in obj &&
                typeof obj.totalPrice === "number" &&
                "cancellationPrice" in obj &&
                typeof obj.cancellationPrice === "number"
            );
        };

        if (!isRoom(room)) {
            return "Value was not a Room.";
        }

        const roomNumber = room.roomNumber as RoomNumber;

        if (this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' already exists.`;
        }

        this.rooms.set(roomNumber, room);
        return `Room '${roomNumber}' added.`;
    }

    bookRoom(roomNumber: RoomNumber, bookedMonth: T): string {
        if (!this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }

        if (!this.bookings.has(roomNumber)) {
            this.bookings.set(roomNumber, new Set());
        }

        const bookedSet = this.bookings.get(roomNumber)!;
        if (bookedSet.has(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }

        bookedSet.add(bookedMonth);
        this.totalBudget += this.rooms.get(roomNumber)!.totalPrice;

        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }

    cancelBooking(roomNumber: RoomNumber, bookedMonth: T): string {
        if (!this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }

        if (
            !this.bookings.get(roomNumber) ||
            !this.bookings.get(roomNumber)!.has(bookedMonth)
        ) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }

        this.bookings.get(roomNumber)!.delete(bookedMonth);

        if (!this.cancellations.has(roomNumber)) {
            this.cancellations.set(roomNumber, new Set());
        }

        this.cancellations.get(roomNumber)!.add(bookedMonth);
        this.totalBudget -= this.rooms.get(roomNumber)!.cancellationPrice;

        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }

    getTotalBudget(): string {
        return `Motel: ${
            PartialMonthlyMotel.MotelName
        }\nTotal budget: $${this.totalBudget.toFixed(2)}`;
    }
}
