let userName = "Haleh";

if (userName) {
  console.log(`Hello, ${userName}`);
} else console.log("Hello!");

let userQuestion = "Will I travel anywhere in 2022?";

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = userQuestion;
console.log(eightBall);

if (randomNumber === 1) {
  console.log("It is certain");
} else if (randomNumber === 2) {
  console.log("It is decidedly so");
} else if (randomNumber === 3) {
  console.log("Reply hazy try again");
} else if (randomNumber === 4) {
  console.log("Cannot predit now");
} else if (randomNumber === 5) {
  console.log("Do not count on it");
} else if (randomNumber === 6) {
  console.log("My sources say no");
} else if (randomNumber === 7) {
  console.log("Outlook not so good");
} else if (randomNumber === 8) {
  console.log("Signs point to yes");
} else console.log("I was sleeping, try again!");
