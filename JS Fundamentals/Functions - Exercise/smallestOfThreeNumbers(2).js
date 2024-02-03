function smallestOfThreeNumbers(num1, num2, num3) {

    let curNum = smallestNumFirst2(num1, num2);
    let finalNum = smallestNumFirst2(curNum, num3)
    console.log(finalNum);

    function smallestNumFirst2(a, b) {
        if (a < b) {
            return a;
        }
        return b;
    }

}

smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);