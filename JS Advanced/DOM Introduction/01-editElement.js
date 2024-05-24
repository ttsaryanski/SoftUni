function editElement(el, match, replacer) {
    
    while (el.textContent.includes(match)) {
        el.textContent = el.textContent.replace(match, replacer);
    }

}

