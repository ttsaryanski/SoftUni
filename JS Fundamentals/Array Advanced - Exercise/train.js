function train(arr) {

    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let commands of arr) {
        let tokens = commands.split(' ');
        if (tokens.includes('Add')) {
            let num = Number(tokens[1]);
            wagons.push(num);
        } else {
            let num = Number(tokens);
            for (let idx in wagons) {
                if (wagons[idx] + num <= capacity) {
                    wagons[idx] += num;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));

}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
