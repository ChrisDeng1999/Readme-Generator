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
            name: 'description',
            message: 'Please write a short description about your project!',
        },
        {
            type: 'input',
            name: 'installation',
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
            message: 'Please enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email.',
        },
    ]);
};


const generateReadMe = ({ project, description, installation, usage, contributing, test, license, github, email}) => 
`# ${project}

## Description
${description}

## Table of Contents

-[Installations](#installation)
-[Usage](#usage)
-[License](#license)
-[Contributing](#contributing)
-[Test](#test)
-[Questions](#github)

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
${github}
${email}
`


const init = () => {
questions()

    .then((answers) => fs.writeFileSync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully generated a Readme!'))
    .catch((err) => console.error(err));
};
init();


