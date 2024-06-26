function solution() {

    let nameRef = document.querySelector('input[type=text]');
    let addBtn = document.getElementsByTagName('button')[0];
    addBtn.addEventListener('click', add);

    let listUl = document.querySelectorAll('ul')[0];
    let sentUl = document.querySelectorAll('ul')[1];
    let discUl = document.querySelectorAll('ul')[2];

    let gifts = [];
    function add(event) {
        event.preventDefault();
        
        while (listUl.firstChild) {
            listUl.removeChild(listUl.firstChild);
        }

        gifts.push(nameRef.value);
        gifts = gifts.sort((a, b) => a.localeCompare(b));
        for (let gift of gifts) {
            let listLi = document.createElement('li');
            listLi.classList.add('gift');
            listLi.textContent = gift;
            let sendBtn = document.createElement('button');
            sendBtn.id = 'sendButton';
            sendBtn.textContent = 'Send';
            sendBtn.addEventListener('click', send);
            let discBtn = document.createElement('button');
            discBtn.id = 'discardButton';
            discBtn.textContent = 'Discard';
            discBtn.addEventListener('click', disc);
            listLi.appendChild(sendBtn);
            listLi.appendChild(discBtn);
            listUl.appendChild(listLi);
        }
        nameRef.value = '';
    }

    function send(event) {
        let listLi = event.currentTarget.parentElement;
        let btn1 = listLi.getElementsByTagName('button')[0]
        let btn2 = listLi.getElementsByTagName('button')[1]
        listLi.removeChild(btn1);
        listLi.removeChild(btn2);
        let sentLi = document.createElement('li');
        sentLi.classList.add('gift');
        sentLi.textContent = listLi.textContent;
        let idx = gifts.indexOf(listLi.textContent);
        gifts.splice(idx, 1);
        listLi.remove();
        sentUl.appendChild(sentLi);

    }

    function disc(event) {
        let listLi = event.currentTarget.parentElement;
        let btn1 = listLi.getElementsByTagName('button')[0]
        let btn2 = listLi.getElementsByTagName('button')[1]
        listLi.removeChild(btn1);
        listLi.removeChild(btn2);
        let discLi = document.createElement('li');
        discLi.classList.add('gift');
        discLi.textContent = listLi.textContent;
        let idx = gifts.indexOf(listLi.textContent);
        gifts.splice(idx, 1);
        listLi.remove();
        discUl.appendChild(discLi);
    }
    
}