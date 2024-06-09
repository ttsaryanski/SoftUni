class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        let params = [name, salary, position, department];
        params.forEach(el => {
            if (el === '' || el === undefined || el === null) {
                throw new Error('Invalid input!')
            }
        });

        if (salary < 0) {
            throw new Error('Invalid input!')
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        
        this.departments[department].push({ name, salary, position });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        let bestAvgSalary = 0;

        for (const department in this.departments) {
            let totalSalary = this.departments[department].reduce((sum, empl) => sum + empl.salary, 0);
            let avgSalary = totalSalary / this.departments[department].length;

            if (avgSalary > bestAvgSalary) {
                bestAvgSalary = avgSalary;
                bestDepartment = department;
            }
        }

        let employees = Array.from(this.departments[bestDepartment]).sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        
        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${bestAvgSalary.toFixed(2)}\n`;

        employees.forEach(el => {
            result += `${el.name} ${el.salary} ${el.position}\n`
        });

        return result.trim();

    }


}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
