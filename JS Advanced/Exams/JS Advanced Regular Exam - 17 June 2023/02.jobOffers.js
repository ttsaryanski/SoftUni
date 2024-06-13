class JobOffers {
    constructor(employer, position) {
        this.employer = employer,
        this.position = position,
        this.jobCandidates = []
    }

    jobApplication(candidates) {
        let addedCandidated = new Set();

        for (let curCandidat of candidates) {
            let [name, education, yearsExperience] = curCandidat.split('-')
            yearsExperience = Number(yearsExperience);

            let findCandidat = this.jobCandidates.find(c => c.name === name);
            if (!findCandidat) {
                this.jobCandidates.push({ name, education, yearsExperience });
                addedCandidated.add(name);
            } else {
                if (yearsExperience > findCandidat.yearsExperience) {
                    findCandidat.yearsExperience = yearsExperience;
                }
            }
        }
        let addedCandidatedArr = Array.from(addedCandidated);
        return `You successfully added candidates: ${addedCandidatedArr.join(', ').trim()}.`;
    }

    jobOffer(chosenPerson) {
        let [name, minExp] = chosenPerson.split('-');
        minExp = Number(minExp);
        let findName = this.jobCandidates.find(n => n.name === name);
        if (!findName) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (minExp > findName.yearsExperience) {
                throw new Error(`${name} does not have enough experience as ${findName.position}, minimum requirement is ${minExp} years.`)
            } else {
                findName.yearsExperience = 'hired';
            }
        }
        return `Welcome aboard, our newest employee is ${name}.`
    }

    salaryBonus(name) {
        let msg = '';
        let findName = this.jobCandidates.find(n => n.name === name);
        if (!findName) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (findName.education === 'Bachelor') {
                msg = `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
            } else if (findName.education === 'Master') {
                msg = `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
            } else {
                msg = `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
            }
        }
        return msg.trim();
    }

    candidatesDatabase() {
        let msg = 'Candidates list:\n';
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        } else {
            let sortedResult = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
            for (let curCandidat of sortedResult) {
                msg += `${curCandidat.name}-${curCandidat.yearsExperience}\n`;
            }
        }
        return msg.trim();
    }

}

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

//  let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("John Jones-8"));

//  let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.salaryBonus("John Doe"));
//  console.log(Jobs.salaryBonus("Peter Parker"));

 let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());



