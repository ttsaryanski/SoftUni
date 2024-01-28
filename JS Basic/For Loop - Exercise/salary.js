function salary(input) {
    let tabCount = Number(input[0]);
    let salary = Number(input[1]);

    for (let index = 2; index < input.length; index++) {
        let position = input[index];
        
        if (position === "Facebook") {
            salary -= 150;
        } else if (position === "Instagram") {
            salary -= 100;
        } else if (position === "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }

    } 
    
    if (salary > 0) {
        console.log(salary);
    }
    
    
}

salary([
"10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]);

salary([
"3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"]);

salary([
"3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]);