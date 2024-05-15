function previousDay(year, month, day) {

    let curData = new Date(year, month - 1, day);
    curData.setDate(curData.getDate() - 1);

    let curYear = curData.getFullYear();
    let curMonth = curData.getMonth() + 1;
    let curDay = curData.getDate();

    console.log(`${curYear}-${curMonth}-${curDay}`);
    
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
