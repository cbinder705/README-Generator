// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("utils");
const markdownGenerator = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "Title",
  },
  {
    type: "input",
    message:
      "What is this project for? Give a brief description of your program.",
    name: "Description",
  },
  {
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents",
  },
  {
    type: "input",
    message: "Does this project have any dependencies?",
    name: "Dependencies",
  },
  {
    type: "input",
    message: "How do you use this application?",
    name: "Instructions",
  },
  {
    type: "input",
    message: "What license is being used?",
    name: "License",
  },
  {
    type: "input",
    message: "Did this project use any tests?",
    name: "Tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
