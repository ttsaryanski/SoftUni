function projectsCreation(input) {
    let name = (input[0]);
    let numberOfProjects = Number(input[1]);
    let timeFromAllprojects = numberOfProjects * 3;
    let creation = 'The architect ' + name + ' will need ' + timeFromAllprojects + ' hours to complete ' + numberOfProjects + ' project/s.';
    console.log(creation);
}
projectsCreation(["George", 4]);
projectsCreation(["Sanya", 9]);