function extractEmails(input) {

    let pattern = /(^| )[A-Za-z0-9]+[A-Za-z.\-_0-9]*@[A-Za-z]+[\-A-Za-z]+?(\.[a-z]+)+/g;

    if (pattern.test(input)) {
        let emails = input.match(pattern);
        emails.forEach(element => console.log(element));
    }
    
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.');
