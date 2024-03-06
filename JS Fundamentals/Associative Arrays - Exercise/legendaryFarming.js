function legendaryFarming(input) {

    let materialListObj = { shards: 0, motes: 0, fragments: 0 };
    let junkObj = {};

    let materialsArr = input.split(' ').map(str => str.toLowerCase());

    for (let i = 0; i < materialsArr.length; i += 2) {
        if (materialsArr[i + 1] === 'motes') {
            if (materialsArr[i + 1] in materialListObj) {
                materialListObj[materialsArr[i + 1]] += Number(materialsArr[i]);
                if (materialListObj[materialsArr[i + 1]] >= 250) {
                    console.log('Dragonwrath obtained!');
                    materialListObj[materialsArr[i + 1]] -= 250;
                    break;
                }
            } else {
                materialListObj[materialsArr[i + 1]] = Number(materialsArr[i]);
                if (materialListObj[materialsArr[i + 1]] >= 250) {
                    console.log('Dragonwrath obtained!');
                    materialListObj[materialsArr[i + 1]] -= 250;
                    break;
                }
            }
        } else if (materialsArr[i + 1] === 'shards') {
            if (materialsArr[i + 1] in materialListObj) {
                materialListObj[materialsArr[i + 1]] += Number(materialsArr[i]);
                if (materialListObj[materialsArr[i + 1]] >= 250) {
                    console.log('Shadowmourne obtained!');
                    materialListObj[materialsArr[i + 1]] -= 250;
                    break;
                }
            } else {
                materialListObj[materialsArr[i + 1]] = Number(materialsArr[i]);
                if (materialListObj[materialsArr[i + 1]] >= 250) {
                    console.log('Shadowmourne obtained!');
                    materialListObj[materialsArr[i + 1]] -= 250;
                    break;
                }
            }
        } else if (materialsArr[i + 1] === 'fragments') {
            if (materialsArr[i + 1] in materialListObj) {
                materialListObj[materialsArr[i + 1]] += Number(materialsArr[i]);
                if (materialListObj[materialsArr[i + 1]] >= 250) {
                    console.log('Valanyr obtained!');
                    materialListObj[materialsArr[i + 1]] -= 250;
                    break;
                }
            } else {
                materialListObj[materialsArr[i + 1]] = Number(materialsArr[i]);
                if (materialListObj[materialsArr[i + 1]] >= 250) {
                    console.log('Valanyr obtained!');
                    materialListObj[materialsArr[i + 1]] -= 250;
                    break;
                }
            }
        } else {
            if (materialsArr[i + 1] in junkObj) {
                junkObj[materialsArr[i + 1]] += Number(materialsArr[i]);
            } else {
                junkObj[materialsArr[i + 1]] = Number(materialsArr[i]);
            }
        }
    }

    let sortedMaterialList = Object.entries(materialListObj).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunk = Object.entries(junkObj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [material, qty] of sortedMaterialList) {
        console.log(`${material}: ${qty}`);
    }
    for (let [junkMaterial, qty] of sortedJunk) {
        console.log(`${junkMaterial}: ${qty}`);
    }
    
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
