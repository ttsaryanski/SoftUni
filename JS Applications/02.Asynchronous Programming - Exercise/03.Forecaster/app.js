function attachEvents() {

    const endPoints = {
        locations: 'http://localhost:3030/jsonstore/forecaster/locations',
        today: 'http://localhost:3030/jsonstore/forecaster/today/',
        upcoming: 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    }

    const inputRef = document.getElementById('location');
    const btn = document.getElementById('submit');
    btn.addEventListener('click', getWeather);
    const forecatsDivRef = document.getElementById('forecast');
    const todayDivRef = document.getElementById('current');
    const upcomingDivRef = document.getElementById('upcoming');

    async function getWeather(event) {
        try {
            const allLocations = await getLocations();
            const userLocation = inputRef.value;

            forecatsDivRef.style.display = 'block';

            const findLocation = allLocations.find(el => el.name === userLocation);
            const dataForToday = await getTodayData(findLocation.code);
            const upcomingData = await getUpcomingData(findLocation.code);

            const todayDiv = createTodayHTML(dataForToday);
            const upcomingDiv = createUpcomingHTML(upcomingData);
            
            clear();

            todayDivRef.appendChild(todayDiv);
            upcomingDivRef.appendChild(upcomingDiv);
        } catch (error) {
            const divContainer = document.createElement('div');
            divContainer.classList.add('forecasts');
            divContainer.textContent = 'Error';
            //inputRef.value = '';
            todayDivRef.appendChild(divContainer);
        }
    }

    async function getLocations() {
        const responseLocation = await fetch(endPoints.locations);
        return responseLocation.json();
    }

    async function getTodayData(code) {
        const todayResponse = await fetch(endPoints.today + code);
        return todayResponse.json();
    }

    async function getUpcomingData(code) {
        const upcomingResponse = await fetch(endPoints.upcoming + code);
        return upcomingResponse.json();
    }

    function createTodayHTML(data) {
        const degraceIcon = createIcon('Degrees');
        const degraceString = `${data.forecast.low}${degraceIcon}/${data.forecast.high}${degraceIcon}`
        
        const divContainer = document.createElement('div');
        divContainer.classList.add('forecasts');
        const symbolSpan = createSpan(['condition', 'symbol'], createIcon(data.forecast.condition), true);
        const spanContainer = createSpan(['condition']);
        const locationSpan = createSpan(['forecast-data'], data.name);
        const degraceSpan = createSpan(['forecast-data'], degraceString, true);
        const conditionSpan = createSpan(['forecast-data'], data.forecast.condition);

        spanContainer.appendChild(locationSpan);
        spanContainer.appendChild(degraceSpan);
        spanContainer.appendChild(conditionSpan);
        divContainer.appendChild(symbolSpan);
        divContainer.appendChild(spanContainer);

        return divContainer;
    }

    function createUpcomingHTML(data) {
        const divContainer = document.createElement('div');
        divContainer.classList.add('forecast-info');
        data.forecast.forEach(el => {
            const { condition, high, low } = el;
            const degraceIcon = createIcon('Degrees');
            const degraceString = `${low}${degraceIcon}/${high}${degraceIcon}`
            const spanContainer = createSpan(['upcoming']);
            const symbolSpan = createSpan(['symbol'], createIcon(condition), true);
            const degraceSpan = createSpan(['forecast-data'], degraceString, true);
            const conditionSpan = createSpan(['forecast-data'], condition);

            spanContainer.appendChild(symbolSpan);
            spanContainer.appendChild(degraceSpan);
            spanContainer.appendChild(conditionSpan);
            divContainer.appendChild(spanContainer);
        })
        return divContainer;
    }

    function createSpan(classList, text, hasIcon) {
        const span = document.createElement('span');
        classList.forEach(cl => span.classList.add(cl));
        hasIcon ? span.innerHTML = text : span.textContent = text;
        return span;
    }

    function createIcon(iconName) {
        const iconEnum = {
            'Sunny': '&#x2600',         // ☀
            'Partly sunny': '&#x26C5',  // ⛅
            'Overcast': '&#x2601',      // ☁
            'Rain': '&#x2614',          // ☂
            'Degrees': '&#176'          // °
        }
        return iconEnum[iconName];
    }

    function clear() {
        Array.from(todayDivRef.children).forEach((x, i) => {
            if (i !== 0) {
                return x.remove();
            }
        })
        Array.from(upcomingDivRef.children).forEach((x, i) => {
            if (i !== 0) {
                return x.remove();
            }
        })
        inputRef.value = '';
    }


}

attachEvents();