let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;
if (runnerAge > 18 && registeredEarly === true){
  raceNumber += 1000;
}
if (runnerAge > 18 && registeredEarly === true){
  console.log(`Hello! You will be racing by 9:30am and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && registeredEarly === false){
   console.log(`Hello! You will be racing by 11:00am and your race number is ${raceNumber}`);
} else if (runnerAge < 18){
   console.log(`Hello! You will be racing by 12:30am and your race number is ${raceNumber}`);
}
else {
  console.log('Hello! Kindly see the registration desk to sought things out');
}