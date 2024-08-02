const notifyBoxRef = document.getElementById('errorBox');
const messageRef = notifyBoxRef.querySelector('span');

export function notify(message) {
    messageRef.textContent = message;
    notifyBoxRef.style.display = 'block'

    setTimeout(() => notifyBoxRef.style.display = 'none', 3000);
}