function attachGradientEvents() {

    let resultRef = document.getElementById('result');
    let areaRef = document.getElementById('gradient');

    areaRef.addEventListener('mousemove', gradient);

    function gradient(event) {

        let areaWidth = areaRef.clientWidth;
        let mouseX = event.offsetX
        let percent = Math.floor((mouseX / areaWidth) * 100);

        resultRef.textContent = `${percent}%`;
    }


}