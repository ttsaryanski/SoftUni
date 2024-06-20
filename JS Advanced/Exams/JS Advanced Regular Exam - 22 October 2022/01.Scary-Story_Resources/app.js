window.addEventListener("load", solve);

function solve() {

    let fNameRef = document.getElementById('first-name');
    let fName;
    let lNameRef = document.getElementById('last-name');
    let lName;
    let ageRef = document.getElementById('age');
    let age;
    let titleRef = document.getElementById('story-title');
    let title;
    let genreRef = document.getElementById('genre');
    let genre;
    let storyRef = document.getElementById('story');
    let story;
    let publishBtn = document.getElementById('form-btn');
    publishBtn.addEventListener('click', publish);

    let prevUl = document.getElementById('preview-list');

    function publish(event) {
        event.preventDefault();

        if (fNameRef.value === '' || lNameRef.value === '' || ageRef.value === '' || titleRef.value === '' || genreRef.value === '' || storyRef.value === '') {
            return;
        }

        let prevLi = document.createElement('li');
        prevLi.classList.add('story-info');
        let prevArticle = document.createElement('article');
        let prevName = document.createElement('h4');
        prevName.textContent = `Name: ${fNameRef.value} ${lNameRef.value}`;
        fName = fNameRef.value;
        lName = lNameRef.value;
        let prevAge = document.createElement('p');
        prevAge.textContent = `Age: ${ageRef.value}`;
        age = ageRef.value;
        let prevTitle = document.createElement('p');
        prevTitle.textContent = `Title: ${titleRef.value}`;
        title = titleRef.value;
        let prevGenre = document.createElement('p');
        prevGenre.textContent = `Genre: ${genreRef.value}`;
        genre = genreRef.value;
        let prevStory = document.createElement('p');
        prevStory.textContent = storyRef.value;
        story = storyRef.value;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save Story';
        saveBtn.addEventListener('click', save);

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit Story';
        editBtn.addEventListener('click', edit);

        let delBtn = document.createElement('button');
        delBtn.classList.add('delete-btn');
        delBtn.textContent = 'Delete Story';
        delBtn.addEventListener('click', del);

        prevArticle.appendChild(prevName);
        prevArticle.appendChild(prevAge);
        prevArticle.appendChild(prevTitle);
        prevArticle.appendChild(prevGenre);
        prevArticle.appendChild(prevStory);
        prevLi.appendChild(prevArticle);
        prevLi.appendChild(saveBtn);
        prevLi.appendChild(editBtn);
        prevLi.appendChild(delBtn);
        prevUl.appendChild(prevLi);

        fNameRef.value = '';
        lNameRef.value = '';
        ageRef.value = '';
        titleRef.value = '';
        genreRef.value = '';
        storyRef.value = '';
        publishBtn.disabled = true;
    }

    function save(event) {
        let mainDiv = document.getElementById('main');

        let div1 = mainDiv.querySelectorAll('div')[0];
        let div2 = document.getElementById('side-wrapper');
        mainDiv.removeChild(div1);
        mainDiv.removeChild(div2);

        let h1 = document.createElement('h1');
        h1.textContent = "Your scary story is saved!";
        mainDiv.appendChild(h1);
    }

    function edit(event) {
        let prevLi = event.currentTarget.parentElement;
        prevLi.remove();

        fNameRef.value = fName;
        lNameRef.value = lName;
        ageRef.value = age;
        titleRef.value = title;
        genreRef.value = genre;
        storyRef.value = story;
        publishBtn.disabled = false;
    }

    function del(event) {
        let prevLi = event.currentTarget.parentElement;
        prevLi.remove();
        publishBtn.disabled = false;
    }

}
