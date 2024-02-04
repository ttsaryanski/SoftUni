function radioCrystals(arr) {

    let target = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        console.log(`Processing chunk ${current} microns`);

        let newNumAfterCut = cuting(current)[0];
        let cutCounter = cuting(current)[1];
        if (cutCounter !== 0) {
            console.log(`Cut x${cutCounter}`);
            console.log('Transporting and washing');
        }
        if (newNumAfterCut === target) {
            console.log(`Finished crystal ${target} microns`);
            continue;
        }

        let newNumAfterLap = laping(newNumAfterCut)[0];
        let lapCounter = laping(newNumAfterCut)[1];
        if (lapCounter !== 0) {
            console.log(`Lap x${lapCounter}`);
            console.log('Transporting and washing');
        }
        if (newNumAfterLap === target) {
            console.log(`Finished crystal ${target} microns`);
            continue;
        }

        let newNumAfterGrind = grinding(newNumAfterLap)[0];
        let gridCounter = grinding(newNumAfterLap)[1];
        if (gridCounter !== 0) {
            console.log(`Grind x${gridCounter}`);
            console.log('Transporting and washing');
        }
        if (newNumAfterGrind === target) {
            console.log(`Finished crystal ${target} microns`);
            continue;
        }

        let newNumAfterEtch = etching(newNumAfterGrind)[0];
        let etchCounter = etching(newNumAfterGrind)[1];
        if (etchCounter !== 0) {
            console.log(`Etch x${etchCounter}`);
            console.log('Transporting and washing');
        }
        if (newNumAfterEtch === target) {
            console.log(`Finished crystal ${target} microns`);
            continue;
        }

        if (newNumAfterEtch < target) {
            //let newNumAfterXray = xray(newNumAfterEtch)[0];
            let xrayCounter = xray(newNumAfterEtch)[1];
            console.log(`X-ray x${xrayCounter}`);
            console.log(`Finished crystal ${target} microns`);
        } else {
            console.log(`Finished crystal ${target} microns`);
        }


        function cuting(num) {
            let startNum = num;
            let curNum = 0;
            let counter = 0;
            while (startNum >= target) {
                curNum = startNum / 4;
                if (curNum >= target) {
                    startNum = Math.floor(curNum);
                    counter++;
                } else {
                    break;
                }
            }
            return [startNum, counter];
        }

        function laping(num) {
            let startNum = num;
            let curNum = 0;
            let counter = 0;
            while (startNum >= target) {
                curNum = startNum * 0.80;
                if (curNum >= target) {
                    startNum = Math.floor(curNum);
                    counter++;
                } else {
                    break;
                }
            }
            return [startNum, counter];
        }

        function grinding(num) {
            let startNum = num;
            let curNum = 0;
            let counter = 0;
            while (startNum >= target) {
                curNum = startNum - 20;
                if (curNum >= target) {
                    startNum = Math.floor(curNum);
                    counter++;
                } else {
                    break;
                }
            }
            return [startNum, counter];
        }

        function etching(num) {
            let startNum = num;
            let curNum = 0;
            let counter = 0;
            while (startNum >= target) {
                curNum = startNum - 2;
                if (curNum >= target - 1) {
                    startNum = Math.floor(curNum);
                    counter++;
                } else {
                    break;
                }
            }
            return [startNum, counter];
        }

        function xray(num) {
            let startNum = num;
            let curNum = 0;
            let counter = 0;
            if (startNum < target) {
                startNum = Math.floor(curNum + 1) + 1;
                counter++;
            }
            return [startNum, counter];
        }
    }

}

//radioCrystals([1375, 50000]);
radioCrystals([100, 396]);
//radioCrystals([1000, 4000, 8100]);
