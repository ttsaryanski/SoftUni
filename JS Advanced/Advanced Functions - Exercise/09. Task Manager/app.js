function solve() {

    document.querySelector('form').addEventListener('submit', onSubmit);

    const [add, open, inProgress, complete] = Array.from(document.querySelectorAll('section'))

    const taskRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dueDateRef = document.getElementById('date');
    
    function onSubmit(event) {
        event.preventDefault();
        let task = taskRef.value;
        let description = descriptionRef.value;
        let date = dueDateRef.value;

        if (!task || !description || !date) {
            return;
        }
        const article = createTask(task, description, date);
        open.children[1].appendChild(article);

        taskRef.value = '';
        descriptionRef.value = '';
        dueDateRef.value = '';
    }

    function createTask(task, description, date) {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = task;
        let pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${description}`;
        let pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date}`;
        let div = document.createElement('div');
        div.classList.add('flex');

        let button1 = createButton('green', 'Start', start);
        let button2 = createButton('red', 'Delete', del);

        div.appendChild(button1);
        div.appendChild(button2);
        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(div)

        return article;
    }

    function createButton(classes, text, handler) {
        let button = document.createElement('button');
        button.classList.add(classes);
        button.textContent = text;
        button.addEventListener('click', handler);
        return button;
    }

    function start(event) {
        const div = event.currentTarget.parentElement;
        const article = div.parentElement;

        div.innerHTML = "";
        let button1 = createButton('red', 'Delete', del);
        let button2 = createButton('orange', 'Finish', finish);
        div.appendChild(button1);
        div.appendChild(button2);
        article.appendChild(div);
        inProgress.children[1].appendChild(article);

    }

    function del(event) {
        const article = event.currentTarget.parentElement.parentElement;
        let parent = article.parentElement;
        parent.removeChild(article);
    }

    function finish(event) {
        const div = event.currentTarget.parentElement;
        const article = div.parentElement;
        article.removeChild(div);
        complete.children[1].appendChild(article);
    }
    
}