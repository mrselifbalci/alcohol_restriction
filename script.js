let johnAge = prompt("Enter your age");
let occupation = prompt("Enter your occupation.").toLowerCase();

switch (true) {
  case johnAge <= 13:
    console.log(`John is a boy. He is a/an ${occupation}`);
    break;
  case johnAge > 13 && johnAge <= 20:
    console.log(`John is a teenager. He is a/an ${occupation}`);
    break;
  case johnAge > 20 && johnAge <= 30:
    console.log(`John is a young man. He is a/an ${occupation}`);
    break;
  default:
    console.log(`John is a man. He is a/an ${occupation}`);
}

johnAge >= 18
  ? console.log(`John can drink alcohol.`)
  : console.log(`John cannot drink alcohol.`);
