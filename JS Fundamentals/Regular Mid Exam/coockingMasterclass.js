function coockingMasterclass(array) {

    let budget = Number(array.shift());
    let studentCount = Number(array.shift());
    let onePackFlourPrice = Number(array.shift());
    let oneEggPrice = Number(array.shift());
    let oneApronPrice = Number(array.shift());

    let flourPrice = 0;
    let flourPackNeeded = studentCount;
    while (flourPackNeeded > 0) {
        if (flourPackNeeded % 5 === 0) {
            //flourPrice += 0;
        } else {
            flourPrice += onePackFlourPrice;
        }
        flourPackNeeded--;
    }

    let eggPrice = studentCount * (10 * oneEggPrice);
    let apronCount = Math.ceil(studentCount * 1.20);
    let apronPrice = apronCount * oneApronPrice;
    let totalPrice = flourPrice + eggPrice + apronPrice;

    if (totalPrice <= budget) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
    } else {
        console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`);
    }

    
}

coockingMasterclass(["50", "2", "1.0", "0.10", "10.0"]);
coockingMasterclass(["100", "25", "4.0", "1.0", "6.0"]);
coockingMasterclass(["946", "20", "12.05", "0.42", "27.89"]);
