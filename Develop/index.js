// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your Project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description about your project!',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What does one have to do in order to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please say what your website is used for.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Did anyone help you on your project whether it be someone else or videos you watched?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'blank',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license.',
            choices: ["blank", "blank", "blank"],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email.',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


