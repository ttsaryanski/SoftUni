class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName,
        this.country = country,
        this.invitedPlayers = []
    }

    newAdditions(footballPlayers) {
        let newPlayers = new Set();
        for (let curPlayer of footballPlayers) {
            let [name, age, playerValue] = curPlayer.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            let findName = this.invitedPlayers.find(el => el.name === name);
            if (!findName) {
                this.invitedPlayers.push({ name, age, playerValue });
                newPlayers.add(name);
            } else {
                if (playerValue > findName.playerValue) {
                    findName.playerValue = playerValue;
                    newPlayers.add(name);
                }
            }
        }
        let newPlayersArr = Array.from(newPlayers);
        return `You successfully invite ${newPlayersArr.join(', ')}.`
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let findName = this.invitedPlayers.find(el => el.name === name);
        if (!findName) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (findName.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${findName.playerValue - playerOffer} million more are needed to sign the contract!`);
        }
        findName.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${findName.name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        let findName = this.invitedPlayers.find(el => el.name === name);
        if (!findName) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        let msg = '';
        if (findName.age < age) {
            let difference = age - findName.age;
            if (difference < 5) {
                msg += `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else {
                msg += `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            msg += `${name} is above age limit!`;
        }
        return msg.trim();
    }

    transferWindowResult() {
        let msg = 'Players list:\n';
        for (const curPlayer of this.invitedPlayers) {
            msg += `Player ${curPlayer.name}-${curPlayer.playerValue}\n`;
        }
        return msg.trim();
    }
}


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

