// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of this project?",
    name: "title",
  },
  //   Description, Installation, Usage, License, Contributing, Tests, and Questions
  {
    type: "input",
    message: "Give a description of the project.",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use this app?",
    name: "usage",
  },
  {
    type: "list",
    message: "Which license do you want to use?",
    name: "license",
    choices: ["MIT", "GPLv2", "Apache", "NONE"],
  },
  {
    type: "input",
    message: "Username on github",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "Who contributed?",
    name: "contributionGuidelines",
  },
  {
    type: "input",
    message: "Test instructions",
    name: "testInstructions",
  },
  {
    type: "input",
    message: "Email Address",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README2.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
