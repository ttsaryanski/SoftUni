window.addEventListener('load', solve);

function solve() {

    let fNameRef = document.getElementById('first-name');
    let lNameRef = document.getElementById('last-name');
    let fromDateRef = document.getElementById('from-date');
    let toDateRef = document.getElementById('to-date');
    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', next);

    let infoUl = document.querySelectorAll('ul')[0];
    let confirmUl = document.querySelectorAll('ul')[1];
    let h1El = document.getElementById('status');

    function next(event) {
        event.preventDefault();

        let fName = fNameRef.value;
        let lName = lNameRef.value;
        let fromDate = fromDateRef.value;
        let toDate = toDateRef.value;

        if (fName === '' || lName === '' || fromDate === '' || toDate === '' || fromDate > toDate) {
            return;
        }

        let infoLi = document.createElement('li');
        infoLi.classList.add('vacation-content');
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${fName} ${lName}`;
        let p1 = document.createElement('p');
        p1.textContent = `From date: ${fromDate}`;
        let p2 = document.createElement('p');
        p2.textContent = `To date: ${toDate}`;

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        let contBtn = document.createElement('button');
        contBtn.classList.add('continue-btn');
        contBtn.textContent = 'Continue';
        contBtn.addEventListener('click', cont);

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        infoLi.appendChild(article);
        infoLi.appendChild(editBtn);
        infoLi.appendChild(contBtn);
        infoUl.appendChild(infoLi);

        fNameRef.value = '';
        lNameRef.value = '';
        fromDateRef.value = '';
        toDateRef.value = '';
        nextBtn.disabled = true;

        function edit(event) {
            event.currentTarget.parentElement.remove();

            fNameRef.value = fName;
            lNameRef.value = lName;
            fromDateRef.value = fromDate;
            toDateRef.value = toDate;
            nextBtn.disabled = false;
        }

        function cont(event) {
            confirmUl.appendChild(event.currentTarget.parentElement);

            let confLi = confirmUl.getElementsByTagName('li')[0];
            let btn1 = confLi.querySelectorAll('button')[0];
            let btn2 = confLi.querySelectorAll('button')[1];
            confLi.removeChild(btn1);
            confLi.removeChild(btn2);

            let confBtn = document.createElement('button');
            confBtn.classList.add('confirm-btn');
            confBtn.textContent = 'Confirm';
            confBtn.addEventListener('click', conf);

            let cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', cancel);

            confLi.appendChild(confBtn);
            confLi.appendChild(cancelBtn);
        }

        function conf(event) {
            event.currentTarget.parentElement.remove();
            nextBtn.disabled = false;

            h1El.classList.add('vacation-confirmed');
            h1El.textContent = 'Vacation Requested';
            h1El.addEventListener('click', () => window.location.reload());
        }

        function cancel(event) {
            event.currentTarget.parentElement.remove();
            nextBtn.disabled = false;

            h1El.classList.add('vacation-cancelled');
            h1El.textContent = 'Cancelled Vacation';
            h1El.addEventListener('click', () => window.location.reload());
        }

    }

}




