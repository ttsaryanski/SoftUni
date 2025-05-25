import { Days } from "./enums/enums.js";

function reversedWeek(dayString: string): void {
    console.log(Days[dayString as keyof typeof Days] || "error");
}

reversedWeek("Monday");
reversedWeek("Friday");
reversedWeek("Invalid");
