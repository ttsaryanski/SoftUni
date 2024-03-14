function matchFullName(input) {

    let result = [];
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    while ((validName = pattern.exec(input)) !== null) {
        result.push(validName);
    }
    console.log(result.join(' '));
    
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");