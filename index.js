// initilize foundation
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?', 
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'email', 
        message: 'Enter your email', 
        validate: emailInput => {
            if (emailInput) {
                return true;
        } else {
            console.log('Please provide your email');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', 
        
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
