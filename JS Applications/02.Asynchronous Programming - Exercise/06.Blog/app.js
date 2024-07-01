async function attachEvents() {

    const endPoints = {
        posts: 'http://localhost:3030/jsonstore/blog/posts',
        comments: 'http://localhost:3030/jsonstore/blog/comments'
    }

    const selectMenu = document.getElementById('posts');
    const loadBtn = document.getElementById('btnLoadPosts');
    loadBtn.addEventListener('click', load);
    const viewBtn = document.getElementById('btnViewPost');
    viewBtn.addEventListener('click', view);
    let data;

    async function load(event) {
        let loadResponse = await fetch(endPoints.posts);
        let dataPosts = await loadResponse.json();
        data = dataPosts;

        for (let el of Object.keys(dataPosts)) {
            let elOption = document.createElement('option');
            elOption.value = el;
            elOption.textContent = dataPosts[el].title;
            selectMenu.appendChild(elOption);
        }
    }

    async function view(event) {
        const elUl = document.getElementById('post-comments');
        elUl.innerHTML = '';

        let viewResponse = await fetch(endPoints.comments);
        let viewData = await viewResponse.json();
        

        let selectedPostRef = document.getElementById('posts');
        let selectedPost = selectedPostRef.value;
        const elH1 = document.getElementById('post-title');
        elH1.textContent = selectedPostRef.options[selectedPostRef.selectedIndex].text;
        const elP = document.getElementById('post-body');
        elP.textContent = data[selectedPost].body;
        for (const el of Object.values(viewData)) {
            if (el.postId === selectedPost) {
                let elLi = document.createElement('li');
                elLi.id = el.id;
                elLi.textContent = el.text;
                elUl.appendChild(elLi);
            }
        }
    }

}

attachEvents();