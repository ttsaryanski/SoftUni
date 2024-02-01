function nonDecreasingSubset(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] < array[i]) {
            array.splice(i + 1, 1);
            i--;
        }
    }
    console.log(array.join(' '));

}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
