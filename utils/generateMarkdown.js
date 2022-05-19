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
    return `[MIT](https://opensource.org/licenses/MIT)`
  }
  if (license === 'GPL') {
    return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === 'BSD 3') {
    return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if (license === 'APACHE 2.0') {
    return `[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is licensed under ${renderLicenseLink(license.licenseName)}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data,license) {
  return `# ${data.title}

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
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(license)} 

## License
${renderLicenseSection(data)}

## Contributing
'Do you want to allow contributors?' ${data.contributorAllowed}

'Contribution Guidlelines' ${data.contributeGuide}

## Tests
To run a test, run the following command: 
${data.test}

## Questions
Please let me know your thoughts or if you have any questions or concerns! ${data.email}.  To view more of my work you can visit: https://github.com/${data.username}.

module.exports = generateMarkdown;
