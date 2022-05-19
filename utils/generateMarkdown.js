// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === '') {
    return ``
  }
  if (license === 'MIT License') {
    return `![MIT License](https://img.shields.io/badge/license-MIT-green)`
  }
  if (license === 'GPL') {
    return `![GNU GPLv3](https://img.shields.io/badge/license-GPL-blue)`
  }
  if (license === 'BSD 3') {
    return `![BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  }
  if (license === 'APACHE 2.0') {
    return `![APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === '') {
    return ``
  }
  if (license === 'MIT License') {
    return `[MIT]()`
  }
  if (license === 'GPL') {
    return `[GPL]()`
  }
  if (lic)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data,license) {
  return `# ${data.name}

  ${renderLicenseLink(license)}${renderLicenseBadge(license)}


## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)${renderLicenseTable(license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}
${renderLicenseSection(license)} 

## Contributing
${data.contribution}

## Tests
To run a test, run the following command: ${data.test}

## Questions
If you have any questions about opening an issue or the repository itself, please contact me at ${data.email}.  Please visit https://github.com/${data.username} for more of my projects!
`;
}

module.exports = generateMarkdown;
