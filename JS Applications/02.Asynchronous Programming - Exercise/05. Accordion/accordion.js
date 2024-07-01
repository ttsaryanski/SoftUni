async function solution() {

    const URI = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let response = await fetch(URI);
    let data = await response.json();

    Object.entries(data).forEach(async (el) => {

        let itemData = await getItemData();
        
        async function getItemData() {
            let fullPatch = 'http://localhost:3030/jsonstore/advanced/articles/details/' + `${el[1]._id}`;
            let itemResponse = await fetch(fullPatch);
            return itemResponse.json();
        }

        const containerDiv = document.createElement('div');
        containerDiv.classList.add('accordion');
        const headDiv = document.createElement('div');
        headDiv.classList.add('head');
        const elSpan = document.createElement('span');
        elSpan.textContent = el[1].title;
        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.setAttribute('id', `${el[1]._id}`);
        btn.textContent = 'More';
        const extraDiv = document.createElement('div');
        extraDiv.style.display = 'none';
        extraDiv.classList.add('extra');
        const elP = document.createElement('p');
        elP.textContent = itemData.content;

        headDiv.appendChild(elSpan);
        headDiv.appendChild(btn);
        extraDiv.appendChild(elP);
        containerDiv.appendChild(headDiv);
        containerDiv.appendChild(extraDiv);
        document.getElementById('main').appendChild(containerDiv);

        btn.addEventListener('click', show);

        function show(event) {
            if (btn.textContent === 'More') {
                btn.textContent = 'Less';
                extraDiv.style.display = 'block';
            } else {
                btn.textContent = 'More';
                extraDiv.style.display = 'none';
            }
        }
        
    })
    
}

solution();