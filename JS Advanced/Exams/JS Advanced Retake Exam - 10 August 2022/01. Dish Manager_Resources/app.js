window.addEventListener("load", solve);

function solve() {

    let fNameRef = document.getElementById('first-name');
    let lNameRef = document.getElementById('last-name');
    let ageRef = document.getElementById('age');
    let genderRef = document.getElementById('genderSelect');
    let taskRef = document.getElementById('task');
    let submitBtn = document.getElementById('form-btn');
    submitBtn.addEventListener('click', submit);

    let inProgUl = document.getElementById('in-progress');
    let finishUl = document.getElementById('finished');
    let counterRef = document.getElementById('progress-count');
    let counter = Number(counterRef.textContent);

    function submit(event) {
        event.preventDefault();

        let fName = fNameRef.value;
        let lName = lNameRef.value;
        let age = ageRef.value;
        let gender = genderRef.value;
        let task = taskRef.value;

        if (fName === '' || lName === '' || age === '' || gender === '' || task === '') {
            return;
        }

        let inProgLi = document.createElement('li');
        inProgLi.classList.add('each-line');
        let article = document.createElement('article');
        let h4 = document.createElement('h4');
        h4.textContent = `${fName} ${lName}`;
        let p1 = document.createElement('p');
        p1.textContent = `${gender}, ${age}`;
        let p2 = document.createElement('p');
        p2.textContent = `Dish description: ${task}`;

        let editBtn = document.createElement("button");
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        let completeBtn = document.createElement("button");
        completeBtn.classList.add('complete-btn');
        completeBtn.textContent = 'Mark as complete';
        completeBtn.addEventListener('click', complete);

        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        inProgLi.appendChild(article);
        inProgLi.appendChild(editBtn);
        inProgLi.appendChild(completeBtn);
        inProgUl.appendChild(inProgLi);

        counter++;
        counterRef.textContent = counter;

        fNameRef.value = '';
        lNameRef.value = '';
        ageRef.value = '';
        genderRef.value = '';
        taskRef.value = '';
        submitBtn.disabled = true;

        function edit(event) {
            event.currentTarget.parentElement.remove();

            fNameRef.value = fName;
            lNameRef.value = lName;
            ageRef.value = age;
            genderRef.value = gender;
            taskRef.value = task;
            submitBtn.disabled = false;

            counter--;
            counterRef.textContent = counter;

        }

        function complete(event) {
            finishUl.appendChild(event.currentTarget.parentElement);
            let finishLi = finishUl.querySelector('li');
            let btn1 = finishLi.querySelectorAll('button')[0];
            let btn2 = finishLi.querySelectorAll('button')[1];
            finishLi.removeChild(btn1);
            finishLi.removeChild(btn2);

            let clearBtn = document.getElementById('clear-btn');
            clearBtn.addEventListener('click', () => {finishLi.remove()});

            counter--;
            counterRef.textContent = counter;

        }

    }

}
