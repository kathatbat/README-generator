// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What is the name of your project?",
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address?",
    },
    {
        type:"input",
        name:"github",
        message:"What is your GitHub username?",
    },
    {
        type:"input",
        name:"description",
        message:"What is the description of your project?",
    },
    {
        type:"input",
        name:"instillation",
        message:"What are the steps required to install your project?",
    },
    {
        type:"input",
        name:"usage",
        message:"Provide instructions and examples for use. Include screenshots and recordings as needed.",
    },
    {
        type:"input",
        name:"credit",
        message:"List your collaborators.",
    },
    {
        type:"input",
        name:"tests",
        message:"Write tests for your application. Then provide examples of how to run them here.",
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'The Organization for Ethical Source', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'ZLib'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init()  {
    inquirer.prompt(questions) .then( (data) =>{
        console.log(data);
        console.log(data.title);
        fs.writeFile('practice.md', generateMarkdown(data), (err) =>{
            if(err){
                throw err
            }
            console.log('Your file has been created!');
        });
    })
};

function generateMarkdown(data) {
    return `# ${data.title}

## Description 
     ${data.description}

## Table of Contents
    [Instillation] {##Instillation}
    [Usage] {##Usage}
    [Contributing] {##Contributing}
    [Tests] {##Tests}
    [License] {##License}
    [Questions] {##Questions}

## Instillation 
     ${data.instillation}

## Usage 
     ${data.usage}

## Contributing 
     ${data.credit}

## Tests 
     ${data.tests}

## License 
     ${data.license}

## Questions 
     ${data.email} 
     ${data.github}
`;
  }
// Function call to initialize app
init();
