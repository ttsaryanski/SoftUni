window.addEventListener('load', solution);

function solution() {

    let emplRef = document.getElementById('employee');
    let empl;
    let categoryRef = document.getElementById('category');
    let category;
    let urgencyRef = document.getElementById('urgency');
    let urgency;
    let teamRef = document.getElementById('team');
    let team;
    let descrpRef = document.getElementById('description');
    let descrp;
    let addBtnlRef = document.getElementById('add-btn');

    let previewUl = document.querySelectorAll('ul')[0];
    let pendingUl = document.querySelectorAll('ul')[1];
    let resolvedUl = document.querySelectorAll('ul')[2];

    addBtnlRef.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        if (emplRef.value ==='' || categoryRef.value === '' || urgencyRef.value === '' || teamRef.value === '' || descrpRef.value === '') {
            return;
        }
        let previeLi = document.createElement('li');
        previeLi.classList.add('problem-content');
        let previeArticle = document.createElement('article');
        let emplP = document.createElement('p');
        emplP.textContent = `From: ${emplRef.value}`;
        empl = emplRef.value;
        let catP = document.createElement('p');
        catP.textContent = `Category: ${categoryRef.value}`;
        category = categoryRef.value;
        let urgP = document.createElement('p');
        urgP.textContent = `Urgency: ${urgencyRef.value}`;
        urgency = urgencyRef.value;
        let teamP = document.createElement('p');
        teamP.textContent = `Assigned to: ${teamRef.value}`;
        team = teamRef.value;
        let descrpP = document.createElement('p');
        descrpP.textContent = `Description: ${descrpRef.value}`;
        descrp = descrpRef.value;
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        let contBtn = document.createElement('button');
        contBtn.classList.add('continue-btn');
        contBtn.textContent = 'Continue';

        previeArticle.appendChild(emplP);
        previeArticle.appendChild(catP);
        previeArticle.appendChild(urgP);
        previeArticle.appendChild(teamP);
        previeArticle.appendChild(descrpP);
        previeLi.appendChild(previeArticle);
        previeLi.appendChild(editBtn);
        previeLi.appendChild(contBtn);
        previewUl.appendChild(previeLi);

        emplRef.value = '';
        categoryRef.value = '';
        urgencyRef.value = '';
        teamRef.value = '';
        descrpRef.value = '';
        addBtnlRef.disabled = true;

        editBtn.addEventListener('click', edit);
        function edit(event) {
            let previewLi = event.currentTarget.parentElement;
            emplRef.value = empl;
            categoryRef.value = category;
            urgencyRef.value = urgency;
            teamRef.value = team;
            descrpRef.value = descrp;
            addBtnlRef.disabled = false;
            previeLi.remove();
        }

        contBtn.addEventListener('click', cont);
        function cont(event) {
            let previewLi = event.currentTarget.parentElement;
            pendingUl.appendChild(previeLi);
            let resolvedBtn = pendingUl.querySelectorAll('button')[0];
            resolvedBtn.setAttribute('class', 'resolve-btn');
            resolvedBtn.textContent = 'Resolved';
            resolvedBtn.addEventListener('click', resolve);
            let contBtn = pendingUl.querySelectorAll('button')[1];
            addBtnlRef.disabled = false;
            previeLi.removeChild(contBtn);
        }

        function resolve(event) {
            let pendingLi = event.currentTarget.parentElement;
            resolvedUl.appendChild(pendingLi);
            let clearBtn = resolvedUl.querySelectorAll('button')[0];
            clearBtn.setAttribute('class', 'clear-btn');
            clearBtn.textContent = 'Clear';
            clearBtn.addEventListener('click', clear);
            //addBtnlRef.disabled = false;
        }

        function clear(event) {
            let resolvedLi = event.currentTarget.parentElement;
            resolvedLi.remove();
        }

    }

}




