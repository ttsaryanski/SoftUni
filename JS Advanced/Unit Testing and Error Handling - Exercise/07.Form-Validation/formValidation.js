function validate() {

    let userNameRef = document.getElementById('username');
    let userNamePattern = /^[A-Za-z0-9]{3,20}$/;

    let emailRef = document.getElementById('email');
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    let passwordRef = document.getElementById('password');
    let passwordPattern = /^[A-Za-z0-9\_]{5,15}$/;

    let confirmPassRef = document.getElementById('confirm-password');

    let isCompanyCheckBoxRef = document.getElementById('company');
    isCompanyCheckBoxRef.addEventListener('change', showCompanyInfo);

    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', formValidation);

    let companyInfoRef = document.getElementById('companyInfo');
    let companyNumberRef = document.getElementById('companyNumber');

    let validRef = document.getElementById('valid');

    function formValidation(event) {
        event.preventDefault();

        let isValidName = false;
        let isValidEmail = false;
        let isValidPass = false;
        let isValidConfitmPass = false;
        let isValidCompanyNumber = true;

        if (userNamePattern.test(userNameRef.value)) {
            userNameRef.style.border = 'none';
            isValidName = true;
        } else {
            userNameRef.style.borderColor = 'red';
        }

        if (emailPattern.test(emailRef.value)) {
            emailRef.style.border = 'none';
            isValidEmail = true;
        } else {
            emailRef.style.borderColor = 'red';
        }

        if (passwordPattern.test(passwordRef.value)) {
            passwordRef.style.border = 'none';
            isValidPass = true;
        } else {
            passwordRef.style.borderColor = 'red';
        }

        if (confirmPassRef.value === passwordRef.value && passwordPattern.test(confirmPassRef.value)) {
            confirmPassRef.style.border = 'none';
            isValidConfitmPass = true;
        } else {
            confirmPassRef.style.borderColor = 'red';
        }

        if (isCompanyCheckBoxRef.checked) {
            if (Number(companyNumberRef.value) >= 1000 && Number(companyNumberRef.value) <= 9999) {
                companyNumberRef.style.border = 'none';
            } else {
                companyNumberRef.style.borderColor = 'red';
                isValidCompanyNumber = false;
            }
        }

        let isValidForm = false;
        if (isValidName && isValidEmail && isValidPass && isValidConfitmPass && isValidCompanyNumber) {
            isValidForm = true;
        }

        if (isValidForm === true) {
            validRef.style.display = 'block';
        } else {
            validRef.style.display = 'none';
        }
    }

    function showCompanyInfo(event) {
        if (isCompanyCheckBoxRef.checked) {
            companyInfoRef.style.display = 'block';
        } else {
            companyInfoRef.style.display = 'none'
        }
    }


}

