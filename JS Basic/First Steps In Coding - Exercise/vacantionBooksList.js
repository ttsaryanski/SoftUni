function vacantionBookList(input) {
    let allSheet = Number(input[0]);
    let sheetPerHour = Number(input[1]);
    let dayFromRead = Number(input[2]);
    let hourPerAllSheet = allSheet / sheetPerHour;
    let hourPerEveryDay = hourPerAllSheet / dayFromRead;
    console.log(hourPerEveryDay);
}
vacantionBookList(["212", "20", "2"])
vacantionBookList(["432", "15", "4"])