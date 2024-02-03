function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commissions = 0;
    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commissions = sales * 5 / 100;
                console.log(commissions.toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                commissions = sales * 7 / 100;
                console.log(commissions.toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                commissions = sales * 8 / 100;
                console.log(commissions.toFixed(2));
            } else if (sales > 10000) {
                commissions = sales * 12 / 100;
                console.log(commissions.toFixed(2));
            } else {
                console.log("error");
            }
            break;

        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commissions = sales * 4.5 / 100;
                console.log(commissions.toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                commissions = sales * 7.5 / 100;
                console.log(commissions.toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                commissions = sales * 10 / 100;
                console.log(commissions.toFixed(2));
            } else if (sales > 10000) {
                commissions = sales * 13 / 100;
                console.log(commissions.toFixed(2));
            } else {
                console.log("error");
            }
            break;  
        
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) {
                commissions = sales * 5.5 / 100;
                console.log(commissions.toFixed(2));
            } else if (sales > 500 && sales <= 1000) {
                commissions = sales * 8 / 100;
                console.log(commissions.toFixed(2));
            } else if (sales > 1000 && sales <= 10000) {
                commissions = sales * 12 / 100;
                console.log(commissions.toFixed(2));
            } else if (sales > 10000) {
                commissions = sales * 14.5 / 100;
                console.log(commissions.toFixed(2));
            } else {
                console.log("error");
            }
            break;
    
        default:
            console.log("error");
            break;
    }
}
tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "499.99"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);
tradeCommissions(["Plovdiv", "-20"]);