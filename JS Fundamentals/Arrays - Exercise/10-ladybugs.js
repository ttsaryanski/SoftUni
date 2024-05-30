function ladybugs(array) {
    let arrLength = array.shift();
    let indexWithBugs = array.shift().split(" ");
    let startArr = [];

    for (let j = 0; j < arrLength; j++) {
        startArr.push(0);
    }
    for (let m = 0; m < indexWithBugs.length; m++) {
        if (startArr[indexWithBugs[m]] === 0) {
            startArr[indexWithBugs[m]] = 1;
        }
    }

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(" ");
        let startIndex = Number(command[0]);
        let direction = command[1];
        let stepIndex = Number(command[2]);
        
        if (startArr[startIndex] === 1) {
            startArr[startIndex] = 0;
            if (direction === "right") {
                for (let i = 0; i < startArr.length; i++) {
                    if (startArr[startIndex + stepIndex] === 0) {
                        startArr[startIndex + stepIndex] = 1;
                        break;
                    } else if (startArr[startIndex + stepIndex] === 1) {
                        startIndex += stepIndex;
                        continue;
                    }
                }
            } else if (direction === "left") {
                for (let i = 0; i < startArr.length; i++) {
                    if (startArr[startIndex - stepIndex] === 0) {
                        startArr[startIndex - stepIndex] = 1;
                        break;
                    } else if (startArr[startIndex - stepIndex] === 1) {
                        startIndex -= stepIndex;
                        continue;
                    }
                }
            }
        }
    }

    console.log(startArr.join(" "));
}

ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
ladybugs([5, "3", "3 left 2", "1 left -2"]);
//ladybugs([5, "0 1 2 3", "3 left 2", "1 left -2"]);
