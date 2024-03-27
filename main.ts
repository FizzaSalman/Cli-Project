#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor (Math.random() * 10 + 1 )



const answers = await inquirer.prompt ([
    {
      name: "userGuessednumber",
      type: "number",
      message: "Please guess a number between 1 - 7: " ,
    }
]);
if (answers.userGuessednumber === randomNumber){
    console.log("Congratulations!you guessed a right number.");
} else {
    console.log("You guessed wrong number");
}