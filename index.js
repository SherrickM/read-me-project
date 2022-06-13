// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username? ",
    name: "username",
  },
  {
    type: "input",
    message: "What is your e-mail address? ",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project? ",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project: ",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["Apache_2.0", "MIT", "Eclipse_Public_License_1.0", "None"],
  },
  {
    type: "input",
    message: "What command should be run to run test? (NPM)",
    name: "test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "repoInstuctions",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "repoContributing",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    writeToFile("README.md", generateMarkdown(responses));
  });
}

// Function call to initialize app
init();
