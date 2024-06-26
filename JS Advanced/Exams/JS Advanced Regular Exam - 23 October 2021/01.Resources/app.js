window.addEventListener('load', solve);

function solve() {

    let genreRef = document.getElementById('genre');
    let songNameRef = document.getElementById('name');
    let authorRef = document.getElementById('author');
    let dateRef = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', add);

    let allHitsSection = document.getElementById('all-hits');
    let allHitsDiv = allHitsSection.querySelectorAll('div')[0];

    let savedSongSection = document.getElementById('saved-hits');
    let savedDiv = savedSongSection.querySelectorAll('div')[0];

    let likeSection = document.getElementById('total-likes');
    let likeDiv = likeSection.querySelectorAll('div')[0];
    let likeP = likeDiv.querySelectorAll('p')[0];

    function add(event) {
        event.preventDefault();

        if (genreRef.value === '' || songNameRef.value === '' || authorRef.value === '' || dateRef.value === '') {
            return;
        }

        let genre = genreRef.value;
        let songname = songNameRef.value;
        let author = authorRef.value;
        let date = dateRef.value;

        let songDiv = document.createElement('div');
        songDiv.classList.add('hits-info');
        let songImg = document.createElement('img');
        songImg.src = './static/img/img.png';
        let songGenre = document.createElement('h2');
        songGenre.textContent = `Genre: ${genre}`;
        let songName = document.createElement('h2');
        songName.textContent = `Name: ${songname}`;
        let songAutor = document.createElement('h2');
        songAutor.textContent = `Author: ${author}`;
        let songDate = document.createElement('h3');
        songDate.textContent = `Date: ${date}`;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', save);

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', like);

        let delBtn = document.createElement('button');
        delBtn.classList.add('delete-btn');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', del);

        songDiv.appendChild(songImg);
        songDiv.appendChild(songGenre);
        songDiv.appendChild(songName);
        songDiv.appendChild(songAutor);
        songDiv.appendChild(songDate);
        songDiv.appendChild(saveBtn);
        songDiv.appendChild(likeBtn);
        songDiv.appendChild(delBtn);
        allHitsDiv.appendChild(songDiv);

        genreRef.value = '';
        songNameRef.value = '';
        authorRef.value = '';
        dateRef.value = '';
        
        function save(event) {
            let songDiv = event.currentTarget.parentElement;
            songDiv.remove();
    
            let saveDiv = document.createElement('div');
            saveDiv.classList.add('hits-info');
            let songImg = document.createElement('img');
            songImg.src = './static/img/img.png';
            let songGenre = document.createElement('h2');
            songGenre.textContent = `Genre: ${genre}`;
            let songName = document.createElement('h2');
            songName.textContent = `Name: ${songname}`;
            let songAutor = document.createElement('h2');
            songAutor.textContent = `Author: ${author}`;
            let songDate = document.createElement('h3');
            songDate.textContent = `Date: ${date}`;
            
    
            let delBtn = document.createElement('button');
            delBtn.classList.add('delete-btn');
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', del);
    
            saveDiv.appendChild(songImg);
            saveDiv.appendChild(songGenre);
            saveDiv.appendChild(songName);
            saveDiv.appendChild(songAutor);
            saveDiv.appendChild(songDate);
            saveDiv.appendChild(delBtn);
            savedDiv.appendChild(saveDiv);
            
        }
    }


    function like(event) {
        let songDiv = event.currentTarget.parentElement;
        let likeBtn = songDiv.querySelectorAll('button')[1];
        likeBtn.disabled = true;

        let [text, likes] = likeP.textContent.split(': ');
        likes = Number(likes);
        likes++;
        likeP.textContent = `${text}: ${likes}`;
    }

    function del(event) {
        let div = event.currentTarget.parentElement;
        div.remove();
    }

}