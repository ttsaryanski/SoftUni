function daysInAMonth(month, year) {

    let curentDate = new Date(year, month - 1);
    curentDate.setMonth(curentDate.getMonth() + 1);
    curentDate.setDate(curentDate.getDate() - 1);
    let lastDay = curentDate.getDate();

    //console.log(lastDay);
    return lastDay;
    
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
