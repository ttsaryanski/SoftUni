function notify(message) {

    let messageRef = document.getElementById('notification');
    messageRef.textContent = message;
    messageRef.style.display = 'block';

    messageRef.addEventListener('click', messageHide);

    function messageHide(event) {
        messageRef.style.display = 'none';
    }

}