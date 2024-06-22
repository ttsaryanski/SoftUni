class HomeRenovation {
    constructor(budget) {
        this.budget = budget,
        this.tasks = [],
        this.completedTasks = []
    }

    addTask(description, cost, priority) {
        let msg = '';
        if (cost > this.budget) {
            msg = `Not enough budget to add '${description}' task.`
        } else {
            this.tasks.push({ description, cost, priority });
            this.budget -= cost;
            msg = `The task '${description}' has been successfully added to the renovation plan.`;
        }
        return msg.trim();
    }

    markTaskAsCompleted(description) {
        let findDescr = this.tasks.find(el => el.description === description);
        if (!findDescr) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }
        this.completedTasks.push(findDescr);
        let idx = this.tasks.indexOf(findDescr);
        this.tasks.splice(idx, 1);
        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount (minimalPriority) {
        let msg = '';
        if (minimalPriority <= 0) {
            msg =  "The priority cannot be zero or negative.";
        } else {
            let result = this.tasks.filter(el => el.priority >= minimalPriority);
            if (result.length === 0) {
                msg = `No tasks found with priority ${minimalPriority} or higher.`;
            } else {
                msg = `You have ${result.length} tasks to prioritize.`;
            }
        }
        return msg.trim();
    }

    renovationSummary() {
        let msg = '';
        if (this.completedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!");
        } else {
            msg = `Budget left $${this.budget}.\n`;
            msg += `You have completed ${this.completedTasks.length} tasks.\n`;
            msg += "Pending tasks in the renovation plan:\n";
            this.tasks.forEach(el => {
                msg += `${el.description} - Cost: ${el.cost}, Priority: ${el.priority}\n`;
            });
        }
        return msg.trim();
    }
}


// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.addTask("New Roof", 5000, 1)); 

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.markTaskAsCompleted("Change doors")); 

// const renovation = new HomeRenovation(10000);
// console.log(renovation.addTask("Paint walls", 1500, 2)); 
// console.log(renovation.addTask("Install new windows", 5000, 1)); 
// console.log(renovation.markTaskAsCompleted("Paint walls")); 
// console.log(renovation.getPriorityTasksCount(1)); 

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());

