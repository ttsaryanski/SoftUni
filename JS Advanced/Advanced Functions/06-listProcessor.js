function listProcessor(array) {

    let result = [];

    let commands = {
        add: string => { result.push(string) },
        remove: string => result = result.filter(el => el !== string),
        print: () => { console.log(result.join(',')); },
    }

    array.forEach(ele => {
        let [command, string] = ele.split(' ');
        return commands[command](string);
    });

    
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
