function numberEndingIn7() {
    
    for ( let num = 1; num <= 1000; num++) {
        if (num % 10 === 7) {
            console.log(num);
        }
    }
}

numberEndingIn7()