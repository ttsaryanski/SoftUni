function fishTank(input) {
    let tankHeight = Number(input[0]);
    let tankWidth = Number(input[1]);
    let tankDepth = Number(input[2]);
    let allTankVolume = (tankHeight * tankWidth * tankDepth) / 1000;
    let percentPerAccessoaries = Number(input[3]);
    let necessaryWater = allTankVolume - (allTankVolume * (percentPerAccessoaries / 100));
    console.log(necessaryWater);
}
fishTank(["85", "75", "47", "17"])
fishTank(["105", "77", "89", "18.5"])