// console.log("JavaScript is connected!");
// let userName = "Developer";
// console.log("Welcome, " + userName);

// userName = "Rahul";
// console.log("Welcome, " + userName);

// const websiteName = "My Personal Website";
// console.log(websiteName);

// const websiteName = "My Personal Website";
// let ownerName = "Rahul";
// let websiteYear = 2026;
// console.log("Website: " + websiteName);
// console.log("Owner: " + ownerName);
// console.log("Year: " + websiteYear);

// let userName = "Rahul";
// let age = 25;
// let isLearning = true;
// console.log(typeof userName);
// console.log(typeof age);
// console.log(typeof isLearning);

// let firstNumber = 10;
// let secondNumber = 5;
// console.log(firstNumber + secondNumber);
// console.log(firstNumber - secondNumber);
// console.log(firstNumber * secondNumber);
// console.log(firstNumber / secondNumber);

// let age1 = 20;
// if (age1 >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// let age2 = 15;
// if (age2 >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// function greetUser() {
//     console.log("Welcome to my personal website!");
// }
// greetUser();

// function greetUser(userName) {
//     console.log("Welcome, " + userName + "!");
// }
// greetUser("Rahul");
// greetUser("Developer");

// function addNumbers(firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }
// let result = addNumbers(10, 20);
// console.log("The result is: " + result);

// const welcomeButton = document.getElementById("welcomeButton");
// function showWelcomeMessage() {
//     alert("Welcome to my personal website!");
// }
// welcomeButton.addEventListener("click", showWelcomeMessage);

const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");
function showWelcomeMessage() {
    welcomeMessage.textContent = "Welcome to my personal website!";
}
welcomeButton.addEventListener("click", showWelcomeMessage);

// const skills = ["HTML", "CSS", "JavaScript"];
// console.log(skills);
// console.log(skills[0]);
// console.log(skills[2]);
// console.log(skills.length);
// skills.push("React");
// console.log(skills);
// for (let i = 0; i < skills.length; i++) {
//     console.log(skills[i]);
// }

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const skillsList = document.getElementById("skillsList");
for (let i = 0; i < skills.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = skills[i];
    skillsList.appendChild(listItem);
}

const user = {
    name: "Rahul",
    age: 25,
    profession: "Full Stack Developer"
};
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.profession);
user.age = 26;
// console.log(user.age);
// console.log(user);
user.city = "Nashik";
console.log(user.city);
console.log(user);



