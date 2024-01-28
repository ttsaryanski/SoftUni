function cinema(input) {
    let category = input[0];
    let lines = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;
    switch (category) {
        case "Premiere":
            income = lines * columns * 12.00;
            break;
        case "Normal":
            income = lines * columns * 7.50;
            break;
        case "Discount":
            income = lines * columns * 5.00;
            break;
    }
        console.log(`${income.toFixed(2) + " leva"}`);
}
cinema(["Premiere", "10", "12"]);
cinema(["Normal", "21", "13"]);
cinema(["Discount", "12", "30"]);