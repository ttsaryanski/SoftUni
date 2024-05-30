function attachGradientEvents() {

    let resultRef = document.getElementById('result');
    let areaRef = document.getElementById('gradient-box');

    areaRef.addEventListener('mouseenter', mouseIn);
    areaRef.addEventListener('mouseleave', gradient);
   

    let mouseStart = 0;
    function gradient(event) {

        let areaWidth = areaRef.clientWidth;
        let mouseEnd = event.offsetX;
        let mouseDistance = mouseEnd - mouseStart;
        let percent = Math.floor((mouseDistance / areaWidth) * 100);

        resultRef.textContent = `${Math.abs(percent)}%`;
    }

    function mouseIn(event) {
        mouseStart = event.offsetX;
        resultRef.textContent = '';
    }

    
}