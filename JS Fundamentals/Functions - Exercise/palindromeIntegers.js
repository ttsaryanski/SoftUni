function palindromeIntegers(arr) {


    for (const num of arr) {
        let isPalindrome = true;
        isPalindrome = checkPalindrome(num);
        console.log(isPalindrome);
    }

    function checkPalindrome(a) {
        let str = String(a);
        reverseStr = str.split('').reverse().join('');
        if (str === reverseStr) {
            return true;
        } else {
            return false;
        }
    }

}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);
