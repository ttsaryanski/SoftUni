function thePyramidOfKingDjoser(base, increment) {

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let step = 0;
    let height = 0;

    for (let countOnSide = base; countOnSide > 0; countOnSide-= 2) {
        step++;
        height += increment;

        if (countOnSide <= 2) {
            gold = (countOnSide ** 2) * increment;
        } else {
            if (step % 5 !== 0) {
                let stoneArea = (countOnSide - 2) ** 2;
                stone += stoneArea * increment;
                let marbleArea = (countOnSide ** 2) - stoneArea;
                marble += marbleArea * increment;
            } else {
                let stoneArea = (countOnSide - 2) ** 2;
                stone += stoneArea * increment;
                let lapisLazuliArea = (countOnSide ** 2) - stoneArea;
                lapisLazuli += lapisLazuliArea * increment;
            }
        }  
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
    
}

thePyramidOfKingDjoser(11, 1);
thePyramidOfKingDjoser(11, 0.75);
thePyramidOfKingDjoser(12, 1);
thePyramidOfKingDjoser(23, 0.5);

