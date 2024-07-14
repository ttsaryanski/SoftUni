async function students() {

    const formRef = document.getElementById('form');
    const bodyRef = document.querySelector('tbody');
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', onSubmit);

    const URL = 'http://localhost:3030/jsonstore/collections/students';

    const response = await fetch(URL);
    const data = await response.json();

    Object.values(data).forEach(user => {
        const trEl = document.createElement('tr');
        const fNameTd = document.createElement('td');
        fNameTd.textContent = user.firstName;
        const lNameTd = document.createElement('td');
        lNameTd.textContent = user.lastName;
        const fNumTd = document.createElement('td');
        fNumTd.textContent = user.facultyNumber;
        const gradeTd = document.createElement('td');
        gradeTd.textContent = Number(user.grade).toFixed(2);

        trEl.appendChild(fNameTd);
        trEl.appendChild(lNameTd);
        trEl.appendChild(fNumTd);
        trEl.appendChild(gradeTd);
        bodyRef.appendChild(trEl);
    })

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(formRef);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const facultyNumber = formData.get('facultyNumber');
        const grade = formData.get('grade');

        if (!firstName || !lastName || !facultyNumber || !grade) {
            return;
        }

        const newUser = { firstName, lastName, facultyNumber, grade };

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        const postResponse = await fetch(URL, option);

        location.reload();
        formRef.reset();

    }

}

students();
