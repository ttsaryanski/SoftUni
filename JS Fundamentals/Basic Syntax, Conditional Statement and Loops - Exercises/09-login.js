function login(input) {
  let userName = input.shift();
  let password = "";

  for (let i = userName.length - 1; i >= 0; i--) {
    password += userName[i];
  }

  let attempt = input.shift();
  let wrongattempt = 0;

  while (attempt !== password) {
    wrongattempt++;
    if (wrongattempt === 4) {
      console.log(`User ${userName} blocked!`);
      return;
    }
    console.log("Incorrect password. Try again.");
    attempt = input.shift();
  }

  if (attempt === password) {
    console.log(`User ${userName} logged in.`);
  }
}

//login(['Acer','login','go','let me in','recA']);
//login(['momo','omom']);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
