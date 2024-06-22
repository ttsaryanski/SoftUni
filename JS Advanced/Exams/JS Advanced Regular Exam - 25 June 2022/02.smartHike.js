class SmartHike {
    constructor(username) {
        this.username = username,
        this.goals = {},
        this.listOfHikes = [],
        this.resources = 100
    }

    addGoal (peak, altitude) {
        let msg = '';
        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude;
            msg = `You have successfully added a new goal - ${peak}`;
        } else {
            msg = `${peak} has already been added to your goals`;
        }
        return msg.trim();
    }

    hike (peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }
        let msg = '';
        let difference = this.resources - (time * 10);
        if (difference < 0) {
            msg = "You don't have enough resources to complete the hike";
        } else {
            this.resources -= (time * 10);
            this.listOfHikes.push({ peak, time, difficultyLevel});
            msg = `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
        return msg.trim();
    }

    rest (time) {
        let msg = '';
        let newResources = time * 10;
        this.resources += newResources;
        if (this.resources >= 100) {
            this.resources = 100;
            msg = `Your resources are fully recharged. Time for hiking!`;
        } else {
            msg = `You have rested for ${time} hours and gained ${newResources}% resources`;
        }
        return msg.trim();
    }

    showRecord (criteria) {
        let msg = '';
        if (this.listOfHikes.length === 0) {
            msg = `${this.username} has not done any hiking yet`;
        } else {
            if (criteria === 'hard') {
                let result = this.listOfHikes.filter(el => el.difficultyLevel === 'hard').sort((a, b) => a.time - b.time);
                if (result.length === 0) {
                    msg = `${this.username} has not done any ${criteria} hiking yet`;
                } else {
                    msg = `${this.username}'s best ${criteria} hike is ${result[0].peak} peak, for ${result[0].time} hours`;
                }
            } else if (criteria === 'easy') {
                let result = this.listOfHikes.filter(el => el.difficultyLevel === 'easy').sort((a, b) => a.time - b.time);
                if (result.length === 0) {
                    msg = `${this.username} has not done any ${criteria} hiking yet`;
                } else {
                    msg = `${this.username}'s best ${criteria} hike is ${result[0].peak} peak, for ${result[0].time} hours`;
                }
            } else if (criteria === 'all') {
                msg = "All hiking records:\n";
                this.listOfHikes.forEach(el => {
                    msg += `${this.username} hiked ${el.peak} for ${el.time} hours\n`;
                });
            }
        }
        return msg.trim();
    }
}


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// console.log(user.showRecord('all'));

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
