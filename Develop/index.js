
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


const generateReadMe = ({}) => 
`# 

## Description

## Table of Contents

## Installations

## Usage

## License

## Contributing

## Test

## Questions`


function init() {}
questions()

    .then((answers) => fs.writeFileSync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));

init();


