// initilize foundation
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
    // GitHub Username
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
    // Your email
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
    // Title of the project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?', 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Do not remain nameless, name your project!');
                return false;
            }
        }
    }, 
    // Project description
    {
        type: 'input', 
        name: 'description', 
        message: 'Tell us a bit about your project', 
        validate: descritionInput => {
            if (descriptionInput) => {
                return true;
            } else {
                console.log('Please tell us something about your project')
                return false;
            }
        }
    }, 
    // Installation instructions
    {
        type: 
    }
    // Usage Information
    // Contribution guidelines
    // Test Instructions
    // Choose a lisence for your application from the list of options
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
