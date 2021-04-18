// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const documentGenerator = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input"
        name: "Author",
        message: "Enter author's (your) name:",
    },
    {
        type: "input",
        name: "Title",
        message: "Enter a title for your ReadMe:",
    },
    {
        type: "input",
        name: "Description",
        message: "Enter a description for your ReadMe:",
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter installation instructions:",
    },
    {
        type: "input",
        name: "Usage",
        message: "Enter usage instructions:",
    },
    {
        type: "list",
        name: "License",
        message: "Choose a license for your ReadMe:",
        choices: [
          "Mozilla Public License",
          "MIT",
          "Unlicense",
        ],
    },
    {
        type: "input",
        name: "Contributing",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "Tests",
        message: "Enter testing information for your application:",
    },
    {
        type: "input",
        name: "Questions",
        message: "Enter email address where you can be reached with questions:",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
