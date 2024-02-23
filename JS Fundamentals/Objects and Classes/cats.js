function cats(arr) {

    class Cat{
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let newCats = [];
    let token = 0;
    
    for (let i = 0; i < arr.length; i++) {
        token = arr[i].split(' ');
        let catName = token[0];
        let catAge = Number(token[1]);
        let cat = new Cat(catName, catAge);
        newCats.push(cat);

        cat.meow(newCats);
    }

}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
