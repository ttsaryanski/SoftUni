enum TravelVacation {
    Abroad = "Abroad",
    InCountry = "InCountry",
}

enum MountainVacation {
    Ski = "Ski",
    Hiking = "Hiking",
}

enum BeachVacation {
    Pool = "Pool",
    Sea = "Sea",
    ScubaDiving = "ScubaDiving",
}

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    private _start!: Date;
    private _end!: Date;

    constructor(startDate: Date, endDate: Date) {
        this.start = startDate;
        this.end = endDate;
    }

    set start(val: Date) {
        if (val > this._end) {
            throw new Error("Stard day cannot be after end day");
        }
        this._start = val;
    }

    set end(val: Date) {
        if (val < this._start) {
            throw new Error("End day cannot be before star day");
        }
        this._end = val;
    }

    getInfo(): string {
        //return `Holiday: {startDate in format d/m/yyyy} - {endDate in format d/m/yyyy }`
        return `Holiday: ${this._start.getDate()}/${
            this._start.getMonth() + 1
        }/${this._start.getFullYear()} - ${this._end.getDate()}/${
            this._end.getMonth() + 1
        }/${this._end.getFullYear()}`;
    }
}

class HolidayManager<
    T extends Holiday,
    V extends TravelVacation | MountainVacation | BeachVacation
> implements VacationManager<T, V>
{
    private holidays: Map<T, V> = new Map();

    reserveVacation(holiday: T, vacationType: V): void {
        this.holidays.set(holiday, vacationType);
    }

    listReservations(): string {
        const result: string[] = [];

        Array.from(this.holidays.entries()).forEach((el) => {
            result.push(`${el[0].getInfo()} => ${el[1]}`);
        });

        return result.join("\n");
    }
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager<Holiday, TravelVacation>();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations());

let holiday7 = new PlannedHoliday(
    new Date(2022, 10, 11),
    new Date(2022, 10, 18)
);
let holiday8 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
let holidayManager3 = new HolidayManager<Holiday, BeachVacation>();
holidayManager3.reserveVacation(holiday7, BeachVacation.ScubaDiving);
holidayManager3.reserveVacation(holiday8, BeachVacation.Sea);
console.log(holidayManager3.listReservations());

let holiday3 = new PlannedHoliday(new Date(2021, 3, 14), new Date(2020, 3, 17));
let holiday4 = new PlannedHoliday(new Date(2024, 2, 1), new Date(2024, 1, 4));

// let holiday5 = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
// let holiday6 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2024, 3, 17));
// let holidayManager2 = new HolidayManager<Holiday, MountainVacation>();
// holidayManager2.reserveVacation(holiday5, BeachVacation.ScubaDiving);
// holidayManager2.reserveVacation(holiday6, TravelVacation.InCountry);
// console.log(holidayManager2.listReservations());
