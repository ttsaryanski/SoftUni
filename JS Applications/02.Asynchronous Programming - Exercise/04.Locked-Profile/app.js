async function lockedProfile() {

    const mainRef = document.getElementById('main');
    const profilDiv = mainRef.getElementsByClassName('profile')[0];

    const URI = 'http://localhost:3030/jsonstore/advanced/profiles';
    let response = await fetch(URI);
    let data = await response.json();
    Object.entries(data).forEach(el => {
        let newDiv = profilDiv.cloneNode(true);
        profilDiv.remove();
        mainRef.appendChild(newDiv);

        const unlockRef = newDiv.querySelectorAll('input[type=radio]')[1];
        const showBtn = newDiv.getElementsByTagName('button')[0];
        showBtn.addEventListener('click', showMore);

        let info = newDiv.querySelectorAll('div[class=user1Username]');
        info[0].setAttribute('id', 'user1HiddenFields');
        info[0].removeAttribute('class');
        info[0].style.display = 'none';
        const nameRef = newDiv.querySelectorAll('input[type=text]')[0];
        nameRef.removeAttribute('disabled');
        nameRef.removeAttribute('readonly');
        nameRef.setAttribute('value', `${el[1].username}`);
        nameRef.setAttribute('disabled', '');
        nameRef.setAttribute('readonly', '');
        const emailRef = newDiv.querySelectorAll('input[type=email]')[0];
        emailRef.removeAttribute('disabled');
        emailRef.removeAttribute('readonly');
        emailRef.setAttribute('value', `${el[1].email}`);
        emailRef.setAttribute('type', 'email')
        emailRef.setAttribute('disabled', '');
        emailRef.setAttribute('readonly', '');
        const ageRef = newDiv.querySelectorAll('input[type=text]')[1];
        ageRef.removeAttribute('disabled');
        ageRef.removeAttribute('readonly');
        ageRef.setAttribute('value', `${el[1].age}`);
        ageRef.setAttribute('type', 'email')
        ageRef.setAttribute('disabled', '');
        ageRef.setAttribute('readonly', '');
        
        function showMore(event) {
            if (unlockRef.checked) {
                if (showBtn.textContent === 'Show more') {
                    info[0].style.display = 'block';
                    showBtn.textContent = 'Hide it';
                } else {
                    info[0].style.display = 'none';
                    showBtn.textContent = 'Show more';
                }
            }
        }

    })

}
