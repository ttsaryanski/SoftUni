function sequence2kPlus1(input) {
    let target = Number(input[0]);

    let num = 1;
    console.log(num);

    while (num <= target ) {
        num = (num * 2) + 1;
        if (num > target) {
            break;
        }
        console.log(num);
    }
}

//sequence2kPlus1(["3"]);
//sequence2kPlus1(["8"]);
//sequence2kPlus1(["17"]);
sequence2kPlus1(["31"]);