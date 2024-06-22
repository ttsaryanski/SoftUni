class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName,
        this.participants = {},
        this.listOfFinalists = []
    }

    addParticipant (participantName, participantGender) {
        let msg = '';
        if (!this.participants.hasOwnProperty(participantName)) {
            this.participants[participantName] = participantGender;
            msg = `A new participant has been added - ${participantName}`;
        } else {
            msg = `${participantName} has already been added to the list`;
        }
        return msg.trim();
    }

    completeness (participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`);
        }
        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        let msg = '';
        let completedCount = Math.floor(condition / 30);
        if (completedCount < 3) {
            msg = `${participantName} could only complete ${completedCount} of the disciplines`
        } else {
            let name = participantName;
            let gender = this.participants[participantName];
            this.listOfFinalists.push({ name, gender });
            delete this.participants.participantName;
            msg = `Congratulations, ${participantName} finished the whole competition`
        }
        return msg.trim();
    }

    rewarding (participantName) {
        let msg = '';
        let findName = this.listOfFinalists.find(el => el.name === participantName);
        if (!findName) {
            msg = `${participantName} is not in the current finalists list`;
        } else {
            msg = `${participantName} was rewarded with a trophy for his performance`;
        }
        return msg.trim();
    }

    showRecord (criteria) {
        let msg = '';
        if (this.listOfFinalists.length === 0) {
            msg = `There are no finalists in this competition`;
        } else {
            if (criteria === 'male') {
                let criteriaArr = this.listOfFinalists.filter(el => el.gender = 'male');
                if (criteriaArr.length === 0) {
                    msg = `There are no ${criteria}'s that finished the competition`;
                } else {
                    msg = `${this.listOfFinalists[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
            } else if (criteria === 'female') {
                let criteriaArr = this.listOfFinalists.filter(el => el.gender = 'female');
                if (criteriaArr.length === 0) {
                    msg = `There are no ${criteria}'s that finished the competition`;
                } else {
                    msg = `${this.listOfFinalists[0].name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
            } else if (criteria === 'all') {
                msg = `List of all ${this.competitionName} finalists:\n`;
                let sortedList = this.listOfFinalists.sort((a, b) => a.name.localeCompare(b.name));
                for (let curFinalist of sortedList) {
                    msg += `${curFinalist.name}\n`;
                }
            }
        }
        return msg.trim();
    }

}


// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));
