function attachEvents() {

    const URL = 'http://localhost:3030/jsonstore/messenger';

    const textAreaRef = document.getElementById('messages');
    const authorRef = document.querySelector("input[name='author']");
    const msgRef = document.querySelector("input[name='content']");

    document.getElementById('submit').addEventListener('click', onSubmit);
    document.getElementById('refresh').addEventListener('click', onRefresh);

    async function onSubmit(event) {
        const author = authorRef.value;
        const content = msgRef.value;

        if (!author || !content) {
            return;
        }

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, content })
        }

        await fetch(URL, option);
        authorRef.value = '';
        msgRef.value = '';
        onRefresh();
    }

    async function onRefresh(event) {
        
        const response = await fetch(URL);
        const data = await response.json();

        let buff = '';
        Object.values(data).forEach(el => {
            buff += `${el.author}: ${el.content}\n`;
        })
        textAreaRef.value = buff.trim();
    }
    
}

attachEvents();