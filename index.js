const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");



inquirer.prompt
    ([
        {
            type: 'input',
            name: 'project',
            message: 'What is the name of your Project?',
        },
        {
            type: 'input',
            name: 'descriptionOne',
            message: 'What was your motivation for this project?',
        },
        {
            type: 'input',
            name: 'descriptionTwo',
            message: 'Why did you build this project?',
        },
        {
            type: 'input',
            name: 'descriptionThree',
            message: 'What problem does your application solve?',
        },
        {
            type: 'input',
            name: 'descriptionFour',
            message: 'What did you learn from your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What does one have to do in order to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your application?',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Did anyone help you on your project whether it be someone else or videos you watched?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'If you wrote any test for your application please list them below.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license.',
            choices: [
                "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)", 
                "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)", 
                "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)", 
                "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)"
            ],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter a link to your github repository.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email.',
        },
    ])
    .then((answer) => fs.writeFile('README.md', generateMarkdown(answer), (err, data) => {
        console.log("Readme is Created!");
    })
    );






