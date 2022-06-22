function generateMarkdown (data) {

return `# ${data.project}\
  
${data.license}



## Description
${data.descriptionOne} ${data.descriptionTwo} ${data.descriptionThree} ${data.descriptionFour} 

## Table of Contents

- [Installations](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)


## Installations
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Test
${data.test}

## Questions
- ${data.github}
- ${data.email}

#### Here is my email above. If you have any questions, comments, or concerns please feel free to send me an email and wait 2-3 business days for a response! Hope you enjoyed my application and have a wonderful day :D

`;
};

module.exports = generateMarkdown;
