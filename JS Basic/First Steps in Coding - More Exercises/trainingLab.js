function trainingLab(input) {
    let labWidthInMeters = Number(input[0]);
    let labHeightInMeters = Number(input[1]);
    let workplaceWidhInSentimeters = 120;
    let workplaceHeightInSentimeters = 70;
    let workplaceNumberPerWidthin = Math.trunc((labWidthInMeters * 100) / workplaceWidhInSentimeters);
    let workplaceNumberPerHeight = Math.trunc(((labHeightInMeters * 100) - 100) / workplaceHeightInSentimeters);
    let allWorkplace = (workplaceNumberPerWidthin * workplaceNumberPerHeight) - 3;
    console.log(allWorkplace);
}
trainingLab(["15", "8.9"]);
trainingLab(["8.4", "5.2"]);