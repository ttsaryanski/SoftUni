window.addEventListener('load', solve);

function solve() {
    let model = document.getElementById('car-model');
    let mo;
    let year = document.getElementById('car-year');
    let ye;
    let partName = document.getElementById('part-name');
    let pName;
    let partNumber = document.getElementById('part-number');
    let pNum;
    let condition = document.getElementById('condition');
    let cond;

    let nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', addInfo);

    let completeImg = document.getElementById('complete-img');
    let completeText = document.getElementById('complete-text');

    function addInfo(event) {
        event.preventDefault();

        if (model.value === '' || year.value === '' || partName.value === '' || partNumber.value === '' || condition.value === '' || year.value < 1980 || year.value > 2023) {
            return;
        }

        let infoUl = document.getElementsByTagName('ul')[0];

        let infoLi = document.createElement('li');
        infoLi.classList.add('part-content');
        let infoArticle = document.createElement('article');
        let modelP = document.createElement('p');
        modelP.textContent = `Car Model: ${model.value}`;
        mo = model.value;
        let yearP = document.createElement('p');
        yearP.textContent = `Car Year: ${year.value}`;
        ye = year.value;
        let nameP = document.createElement('p');
        nameP.textContent = `Part Name: ${partName.value}`;
        pName = partName.value;
        let numberP = document.createElement('p');
        numberP.textContent = `Part Number: ${partNumber.value}`;
        pNum = partNumber.value;
        let conditionP = document.createElement('p');
        conditionP.textContent = `Condition: ${condition.value}`;
        cond = condition.value;

        let editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit);

        let continueButton = document.createElement('button');
        continueButton.classList.add('continue-btn');
        continueButton.textContent = 'Continue';
        continueButton.addEventListener('click', cont);

        infoArticle.appendChild(modelP);
        infoArticle.appendChild(yearP);
        infoArticle.appendChild(nameP);
        infoArticle.appendChild(numberP);
        infoArticle.appendChild(conditionP);

        infoLi.appendChild(infoArticle);
        infoLi.appendChild(editButton);
        infoLi.appendChild(continueButton);
        infoUl.appendChild(infoLi);

        nextButton.disabled = true;
        completeImg.style.visibility = "hidden";
        completeText.textContent = '';
        model.value = '';
        year.value = '';
        partName.value = '';
        partNumber.value = '';
        condition.value = '';
    }

    function edit(event) {
        let li = event.currentTarget.parentElement;
        model.value = mo;
        year.value = ye;
        partName.value = pName;
        partNumber.value = pNum;
        condition.value = cond;

        nextButton.disabled = false;
        li.remove();
        
    }

    function cont(event) {
        let li = event.currentTarget.parentElement;
        let confirmUl = document.getElementsByTagName('ul')[1];

        let confirmLi = document.createElement('li');
        confirmLi.classList.add('part-content');
        let confirmArticle = document.createElement('article');
        let modelP = document.createElement('p');
        modelP.textContent = `Car Model: ${mo}`;
        let yearP = document.createElement('p');
        yearP.textContent = `Car Year: ${ye}`;
        let nameP = document.createElement('p');
        nameP.textContent = `Part Name: ${pName}`;
        let numberP = document.createElement('p');
        numberP.textContent = `Part Number: ${pNum}`;
        let conditionP = document.createElement('p');
        conditionP.textContent = `Condition: ${cond}`;

        let confirmButton = document.createElement('button');
        confirmButton.classList.add('confirm-btn');
        confirmButton.textContent = 'Confirm';
        confirmButton.addEventListener('click', confirm);

        let cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-btn');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', cancel);

        confirmArticle.appendChild(modelP);
        confirmArticle.appendChild(yearP);
        confirmArticle.appendChild(nameP);
        confirmArticle.appendChild(numberP);
        confirmArticle.appendChild(conditionP);

        confirmLi.appendChild(confirmArticle);
        confirmLi.appendChild(confirmButton);
        confirmLi.appendChild(cancelButton);
        confirmUl.appendChild(confirmLi);

        li.remove();
    }

    function confirm(event) {
        let li = event.currentTarget.parentElement;

        nextButton.disabled = false;
        completeImg.style.visibility = "visible";
        completeText.textContent = 'Part is Ordered!';

        li.remove();
    }

    function cancel(event) {
        let li = event.currentTarget.parentElement;
        nextButton.disabled = false;
        li.remove();
    }


}




