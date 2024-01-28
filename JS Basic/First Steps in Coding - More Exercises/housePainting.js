function housePainting(input) {
    let fullOneProfilSideArea = Number(input[0]) * Number(input[1]);
    let oneProfilSideAreaWithoutWindow = fullOneProfilSideArea - (1.5 * 1.5);
    let fullProfilArea = oneProfilSideAreaWithoutWindow * 2;
    let fullFrontBackAreaWithDoor = (Number(input[0]) * Number(input[0])) * 2;
    let fullFrontBackArea = fullFrontBackAreaWithDoor - (1.2 * 2);
    let fullHouseArea = fullFrontBackArea + fullProfilArea;
    let greenPaint = (fullHouseArea / 3.4).toFixed(2);
    let fullSideRoofArea = (Number(input[0]) * Number(input[1])) * 2;
    let fullFrontBackRoofArea = ((Number(input[0]) * Number(input[2])) / 2) * 2;
    let redPaint = ((fullFrontBackRoofArea + fullSideRoofArea) / 4.3).toFixed(2);
    console.log(greenPaint);
    console.log(redPaint);
}
housePainting([6, 10, 5.2]);
housePainting([10.25, 15.45, 8.88])