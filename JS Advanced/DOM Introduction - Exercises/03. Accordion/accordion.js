function toggle() {

    let strRef = document.getElementById('extra');
    let buttonStrRef = document.getElementsByClassName('button')[0];

    if (buttonStrRef.textContent === 'More') {
        strRef.style.display = 'block';
        buttonStrRef.textContent = 'Less';
    } else {
        strRef.style.display = 'none';
        buttonStrRef.textContent = 'More';
    }


}


