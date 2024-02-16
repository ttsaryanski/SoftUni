function guineaPig(array) {

    let startFood = Number(array.shift()) * 1000;
    let startHay = Number(array.shift()) * 1000;
    let startCover = Number(array.shift()) * 1000;
    let startPuppyWeight = Number(array.shift()) * 1000;

    for (let day = 1; day <= 30; day++) {
        startFood -= 300;
        if (day % 2 === 0) {
            startHay -= startFood * 0.05;
        }
        if (day % 3 === 0) {
            startCover -= startPuppyWeight / 3;
        }
        if (startFood <= 0 || startHay <= 0 || startCover <= 0) {
            console.log('Merry must go to the pet store!');
            return;
        }
        
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(startFood / 1000).toFixed(2)}, Hay: ${(startHay / 1000).toFixed(2)}, Cover: ${(startCover / 1000).toFixed(2)}.`);
    
}

guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);
guineaPig(["9", "5", "5.2", "1"]);
