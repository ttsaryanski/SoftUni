function attachEventsListeners() {

    let dayButtonRef = document.getElementById('daysBtn');
    let dayBoxRef = document.getElementById('days');
    dayButtonRef.addEventListener('click', convertFromDays);

    function convertFromDays() {
        let hour = dayBoxRef.value * 24;
        let min = dayBoxRef.value * 24 * 60;
        let sec = dayBoxRef.value * 24 * 60 * 60;
        hourBoxRef.value = hour;
        minBoxRef.value = min;
        secBoxRef.value = sec;
    }

    let hourButtonRef = document.getElementById('hoursBtn');
    let hourBoxRef = document.getElementById('hours');
    hourButtonRef.addEventListener('click', convertFromHours);

    function convertFromHours() {
        let day = hourBoxRef.value / 24;
        let min = hourBoxRef.value * 60;
        let sec = hourBoxRef.value * 60 * 60;
        dayBoxRef.value = day;
        minBoxRef.value = min;
        secBoxRef.value = sec;
    }
    

    let minButtonRef = document.getElementById('minutesBtn');
    let minBoxRef = document.getElementById('minutes');
    minButtonRef.addEventListener('click', convertFromMin);

    function convertFromMin() {
        let day = minBoxRef.value / 60 / 24;
        let hour = minBoxRef.value / 60;
        let sec = minBoxRef.value * 60;
        dayBoxRef.value = day;
        hourBoxRef.value = hour;
        secBoxRef.value = sec;
    }

    let secButtonRef = document.getElementById('secondsBtn');
    let secBoxRef = document.getElementById('seconds');
    secButtonRef.addEventListener('click', convertFromSec);

    function convertFromSec() {
        let day = secBoxRef.value / 60 / 60 / 24;
        let hour = secBoxRef.value / 60 / 60;
        let min = secBoxRef.value / 60;
        dayBoxRef.value = day;
        hourBoxRef.value = hour;
        minBoxRef.value = min;
    }


}