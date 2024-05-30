function validate() {

    let inputBoxRef = document.getElementById('email');
    // inputBoxRef.focus();
    let pattern = /\w+@\w+\.\w+/g;

    inputBoxRef.addEventListener('change', classChange);
    // inputBoxRef.addEventListener('input', (event) => {
    //     inputBoxRef.classList.remove('error');
    // })

    function classChange() {
        if (!pattern.test(inputBoxRef.value)) {
            inputBoxRef.classList.add('error');
        } else {
            inputBoxRef.classList.remove('error');
        }
        //inputBoxRef.value = '';
    }

    
}