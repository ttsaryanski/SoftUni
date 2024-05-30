function focused() {

    let boxesRef = document.querySelectorAll('div input');
    for (const box of boxesRef) {

    box.addEventListener('focus', (event) => {
        box.parentNode.classList.add('focused');
    });
        
    box.addEventListener('blur', (event) => {
        box.parentNode.classList.remove('focused');
    })

    box.value = '';
        
    }

    
}