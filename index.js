#! /usr/bin/env node
import inquirer from "inquirer";
//PLAN:
//computer wiil generate a random number
//take number input from the user.
//compare the user input from computer generated random number.
const random_number = Math.floor(Math.random() * 6 + 1); //genertes between 1  to 6.
const answer = await inquirer.prompt([
    {
        name: "user_guessed_number",
        type: "number",
        message: "Please guess a number between 1 to 6 :",
    },
]);
if (answer.user_guessed_number === random_number) {
    console.log(`Congratulations , you have guessed correct number.`);
}
else {
    console.log(`Sorry! You guessed wrong number.`);
}
