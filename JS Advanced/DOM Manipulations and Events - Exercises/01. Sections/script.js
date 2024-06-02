function create(words) {

    let contentRef = document.getElementById('content');
    creatAndAppendDiv(contentRef);

    function creatAndAppendDiv(root) {

        for (let i = 0; i < words.length; i++) {
            let divElement = document.createElement('div');

            let pElement = document.createElement('p');
            pElement.textContent = words[i];
            pElement.style.display = 'none';
            
            divElement.appendChild(pElement);
            divElement.addEventListener('click', clickMe);

            root.appendChild(divElement);
        }
    }

    function clickMe(event) {
        let target = event.currentTarget;
        let children = target.children;
        let p = children[0];
        let curDysplay = p.style.display;
        p.style.display = curDysplay === 'block' ? 'none' : 'block';
    }

}