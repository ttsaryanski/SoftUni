function extract(content) {

    let strRef = document.getElementById('content').textContent.trim();
    let pattern = /\(([^)]+)\)/g;

    let matches = strRef.match(pattern)
                        .map(str => str.replace('(', ''))
                        .map(str => str.replace(')', ''));
    
    return matches.join('; ');
    
}
