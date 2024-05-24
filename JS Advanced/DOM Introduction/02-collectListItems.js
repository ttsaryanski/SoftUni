function extractText() {

    let result = [];

    let targetObj = document.querySelectorAll("li");
    
    for (const target of targetObj) {
        let str = target.textContent;
        result.push(str);
    }

    result = result.join('\n');
    
    let textArea = document.getElementById("result");
    textArea.textContent = result;
    
}