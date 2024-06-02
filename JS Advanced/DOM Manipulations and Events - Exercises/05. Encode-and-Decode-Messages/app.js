function encodeAndDecodeMessages() {

    let encodeRef = document.querySelectorAll('div')[1];
    let writeBoxRef = encodeRef.querySelector('textarea');
    let encodeButton = encodeRef.querySelector('button');

    encodeButton.addEventListener('click', encodedMessage);

    function encodedMessage() {
        let message = writeBoxRef.value.split('');
        let newMessage = [];
        for (let i = 0; i < message.length; i++) {
            const letter = message[i];
            let tmp = letter.charCodeAt(0);
            let newLetter = String.fromCharCode(tmp + 1);
            newMessage.push(newLetter);
        }
        message = newMessage.join('');
        decodeMessageBox.value = message;
        writeBoxRef.value = '';
    }

    let decodeRef = document.querySelectorAll('div')[2];
    let decodeMessageBox = decodeRef.querySelector('textarea');
    let decodeButton = decodeRef.querySelector('button');

    decodeButton.addEventListener('click', decodeMessage);

    function decodeMessage() {
        let message = decodeMessageBox.value.split('');
        let newMessage = [];
        for (let i = 0; i < message.length; i++) {
            const letter = message[i];
            let tmp = letter.charCodeAt(0);
            let newLetter = String.fromCharCode(tmp - 1);
            newMessage.push(newLetter);
        }
        message = newMessage.join('');
        decodeMessageBox.value = message;
    }

}