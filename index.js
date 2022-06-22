const inquirer = require('inquirer');
const fs = require('fs');



const questions = () => {
    return inquirer.prompt([
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
            message: 'What problem does your problem solve?',
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
    ]);
};


const generateReadMe = ({ project, descriptionOne, descriptionTwo, descriptionThree, descriptionFour, installation, usage, contributing, test, license, github, email}) => 
`# ${project}

## Description
${descriptionOne} ${descriptionTwo} ${descriptionThree} ${descriptionFour} 

## Table of Contents

[Installations](#installation)\
[Usage](#usage)\
[License](#license)\
[Contributing](#contributing)\
[Test](#test)\
[Questions](#questions)\


## Installations
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Test
${test}

## Questions
- ${github}
- ${email}
Here is my email above. If you have any questions, comments, or concerns please feel free to send me an email and wait 2-3 business days for a response! Hope you enjoyed my application and have a wonderful day :D
`


const init = () => {
questions()

    .then((answers) => fs.writeFileSync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully generated a Readme!'))
    .catch((err) => console.error(err));
};
init();


