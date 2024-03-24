function adAstra(array) {

    let totalKcal = 0;
    let kcalPerDay = 2000;
    let productList = [];
    let pattern = /(#|\|)(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<kcal>\d+)\1/gm;

    let exec = pattern.exec(array[0]);
    while (exec) {
        let name = exec.groups.name;
        let date = exec.groups.date;
        let kcal = Number(exec.groups.kcal);
        
        totalKcal += kcal;

        let curProduct = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`;
        productList.push(curProduct);

        exec = pattern.exec(array[0]);
    }
    let days = Math.floor(totalKcal / kcalPerDay);

    console.log(`You have food to last you for: ${days} days!`);
    productList.forEach(element => console.log(element));
    
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]);
adAstra([
    'Hello|#Invalid food#19/03/20#450|$5*(@'
]);