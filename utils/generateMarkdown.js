// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
   # Description:
   ${answers.description}
   ##### Table of Contents: 
   [Headers](#usage)
   # Installation:
   ${answers.installation}
   # Usage:
   ${answers.usage}
  # License:
   ${answers.license}
   # Contributing:
   ${answers.contributionGuidelines}
   # Tests:
   ${answers.testInstructions}
   # Questions:
   If you have any questions please contact me at: ${answers.email}
   ${answers.githubUsername}
`;
}
// ##### Table of Contents
// [Headers](#headers)
// [Emphasis](#emphasis)
// ...snip...
// <a name="headers"/>
// ## Headers

module.exports = generateMarkdown;
