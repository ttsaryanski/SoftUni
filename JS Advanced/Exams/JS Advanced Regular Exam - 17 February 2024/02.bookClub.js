class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook (title, author) {
        let findTitle = this.books.find(t => t.title === title);
        if (!findTitle) {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        } else {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }
    }

    addMember (memberName) {
        let findMember = this.members.find(m => m === memberName);
        if (!findMember) {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        } else {
            return `Member ${memberName} is already a part of the book club.`
        }
    }

    assignBookToMember (memberName, bookTitle) {
        let isError = false;
        let findMember = this.members.find(m => m === memberName);
        if (!findMember) {
            isError = true;
            throw new Error(`Member ${memberName} not found.`);
        }

        let findTitle = this.books.find(t => t.title === bookTitle);
        if (!findTitle) {
            isError = true;
            throw new Error(`Book "${bookTitle}" not found.`)
        }

        if (!isError) {
            let idx = this.books.indexOf(findTitle);
            this.books.splice(idx, 1);
            return `Member ${memberName} has been assigned the book "${findTitle.title}" by ${findTitle.author}.`
        }
    }

    generateReadingReport () {
        if (this.members.length === 0) {
            return 'No members in the book club.';
        }
        if (this.books.length === 0) {
            return 'No available books in the library.';
        }
        let msg = `Available Books in ${this.library} library:\n`;
        for (let book of this.books) {
            msg += `"${book.title}" by ${book.author}\n`;
        }
        return msg.trim();
    }
}

// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());

