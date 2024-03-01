function meetings(arr) {

    let list = {};

    for (let row of arr) {
        let [day, name] = row.split(' ');
        if (list[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            list[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    
    for (let [day, name] of Object.entries(list)) {
        console.log(`${day} -> ${name}`);
    }
    
}

// meetings([
//     'Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim'
// ]);
meetings([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);
