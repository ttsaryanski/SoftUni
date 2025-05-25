import { Days } from "./enums/enums.js";

function dayOfTheWeek(dayNum: number): void {
    console.log(Days[dayNum] || "error");
}

dayOfTheWeek(1);
dayOfTheWeek(5);
dayOfTheWeek(-1);
