function requiredReading(pagesCount, pageForHour, dayCount) {

    let fullHour = pagesCount / pageForHour;
    let hourForDay = fullHour / dayCount;

    console.log(hourForDay);
    
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
