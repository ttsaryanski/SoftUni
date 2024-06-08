function validate() {

    let inputBoxRef = document.getElementById('email');
    inputBoxRef.addEventListener('change', onChange);


    function onChange(event) {
        let value = inputBoxRef.value;
        let emailPattern = /^[a-z]+\@[a-z]+\.[a-z]+$/;

        if (emailPattern.test(value)) {
            inputBoxRef.classList.remove('error');
        } else {
            inputBoxRef.classList.add('error');
        }
    }


}