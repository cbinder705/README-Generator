// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    type: "list",
    message: "What license is being used?",
    choices: ["apgl", "apache", "mit", "none"],
  },
  {
    type: "input",
    name: "test",
    message: "How can i test this application to see if it works correctly?",
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        console.log("Please enter instructions");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/generated-README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};
// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions).then((readmeData) => {
    return readmeData;
  });
};
// Function call to initialize app
init()
  .then((readmeData) => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
  })
  .then((pageMD) => {
    return writeFile(pageMD);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse.message);
  })
  .catch((err) => {
    console.log(err);
  });
