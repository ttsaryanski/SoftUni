function lockedProfile() {

    let buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.addEventListener('click', solve);
    }

    function solve(event) {
        let button = event.target;
        let profile = button.parentElement;
        let status = profile.querySelector('input[type="radio"]:checked').value;
        let info = profile.querySelector('div');

        if (status === 'unlock') {
            if (button.textContent === 'Show more') {
                info.style.display = 'inline';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                info.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }


}