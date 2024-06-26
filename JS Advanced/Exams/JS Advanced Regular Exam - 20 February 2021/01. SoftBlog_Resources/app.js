function solve() {

    let creatorRef = document.getElementById('creator');
    let titleRef = document.getElementById('title');
    let categoryRef = document.getElementById('category');
    let contRef = document.getElementById('content');
    let createBtn = document.querySelectorAll('button')[0];
    createBtn.addEventListener('click', creat);

    let mainH2 = document.getElementsByTagName('h2')[0];
    let mainSection = mainH2.parentElement;

    let archivH2 = document.getElementsByTagName('h2')[2];
    let archivSection = archivH2.parentElement;
    let archivOl = archivSection.querySelectorAll('ol')[0];

    function creat(event) {
        event.preventDefault();

        let postsArticle = document.createElement('article');
        let postTitle = document.createElement('h1');
        postTitle.textContent = titleRef.value;

        let categoryP = document.createElement('p');
        let strongCat = document.createElement('strong');
        strongCat.textContent = categoryRef.value;
        let textBeforeCat = document.createTextNode('Category: ');
        categoryP.appendChild(textBeforeCat);
        categoryP.appendChild(strongCat);

        let creatorP = document.createElement('p');
        let strongCreat = document.createElement('strong');
        strongCreat.textContent = creatorRef.value;
        let textBeforeCreat = document.createTextNode('Creator: ');
        creatorP.appendChild(textBeforeCreat);
        creatorP.appendChild(strongCreat);

        let contP = document.createElement('p');
        contP.textContent = contRef.value;

        let btnDiv = document.createElement('div');
        btnDiv.classList.add('buttons');
        let delBtn = document.createElement('button');
        delBtn.classList.add('btndelete');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', del);
        let archivBtn = document.createElement('button');
        archivBtn.classList.add('btnarchive');
        archivBtn.textContent = 'Archive';
        archivBtn.addEventListener('click', archiv);
        btnDiv.appendChild(delBtn);
        btnDiv.appendChild(archivBtn);


        postsArticle.appendChild(postTitle);
        postsArticle.appendChild(categoryP);
        postsArticle.appendChild(creatorP);
        postsArticle.appendChild(contP);
        postsArticle.appendChild(btnDiv);
        mainSection.appendChild(postsArticle);
    }

    function del(event) {
        let postArticel = event.currentTarget.parentElement.parentElement;
        postArticel.remove();
    }

    let archivArr= [];
    function archiv(event) {
        let postArticel = event.currentTarget.parentElement.parentElement;
        let titleNameRef = postArticel.querySelectorAll('h1')[0];
        let titleName = titleNameRef.textContent;
        
        while (archivOl.firstChild) {
            archivOl.removeChild(archivOl.firstChild);
        }

        archivArr.push(titleName);
        let sortedArchiv = archivArr.sort((a, b) => a.localeCompare(b));

        for (let title of sortedArchiv) {
            let archivLi = document.createElement('li');
            archivLi.textContent = title;
            archivOl.appendChild(archivLi);
        }
        postArticel.remove();
    }

}
