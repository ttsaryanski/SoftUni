function histogram(input) {
    let numCount = Number(input[0]);
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    let percent1 = 0;
    let percent2 = 0;
    let percent3 = 0;
    let percent4 = 0;
    let percent5 = 0;

    for (let index = 1; index <= numCount; index++) {
        let numbers = input[index]
        if (numbers < 200) {
             count1 += 1;
        } else if (numbers <= 399) {
            count2 += 1;
        } else if (numbers <= 599) {
            count3 += 1;
        } else if (numbers <= 799) {
            count4 += 1;
        } else if (numbers >= 800){
            count5 += 1;
        }

    }

    percent1 = (count1 / numCount) * 100;
    percent2 = (count2 / numCount) * 100;
    percent3 = (count3 / numCount) * 100;
    percent4 = (count4 / numCount) * 100;
    percent5 = (count5 / numCount) * 100;
    
    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);
    
}

histogram([
"3",
"1",
"2",
"999"]);

// histogram([
// "7",
// "800",
// "801",
// "250",
// "199",
// "399",
// "599",
// "799"]);

// histogram([
// "9",
// "367", 
// "99", 
// "200", 
// "799",
// "999",
// "333",
// "555",
// "111",
// "9"]);

// histogram([
// "14",
// "53",
// "7",
// "56",
// "180",
// "450",
// "920",
// "12",
// "7",
// "150",
// "250",
// "680",
// "2",
// "600",
// "200"]);