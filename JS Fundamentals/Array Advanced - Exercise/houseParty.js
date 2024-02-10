function houseParty(arr) {

    let list = [];

    for (let tokens of arr) {
        let token = tokens.split(' ');
        let name = token[0];
        
        if (!token.includes('not')) {
            if (!list.includes(name)) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (list.includes(name)) {
                let idx = list.indexOf(name);
                list.splice(idx, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(list.join('\n'));

}

houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty([
  "Tom is going!",
  "Annie is going!",
  "Tom is going!",
  "Garry is going!",
  "Jerry is going!",
]);
