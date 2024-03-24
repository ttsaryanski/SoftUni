function worldTour(array) {

    let string = array.shift();
    let commands = array.shift();

    while (commands !== 'Travel') {
        let token = commands.split(':');
        let command = token.shift();
        if (command === 'Add Stop') {
            let idx = Number(token[0]);
            let str = token[1];
            if (idx >= 0 && idx < string.length) {
                string = string.slice(0, idx) + str + string.slice(idx);
            }
        } else if (command === 'Remove Stop') {
            let [startIdx, stopIdx] = token.map(Number);
            if (startIdx >= 0 && stopIdx < string.length) {
                string = string.slice(0, startIdx) + string.slice(stopIdx + 1);
            }
        } else if (command === 'Switch') {
            let [oldStr, newStr] = token;
            if (string.includes(oldStr)) {
                string = string.replace(oldStr, newStr);
            }
        }
        console.log(string);
        commands = array.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${string}`);

}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);
worldTour([
    'Albania:Bulgaria:Cyprus:Deuchland',
    'Add Stop:3:Nigeria',
    'Remove Stop:4:8',
    'Switch:Albania: Azərbaycan',
    'Travel'
]);
