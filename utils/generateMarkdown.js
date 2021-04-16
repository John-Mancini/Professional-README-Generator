// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPLv2") {
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
  } else {
    return "NONE";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);
  //   [MIT](https://www.mit.edu/~amini/LICENSE.md)
  // [GPlv2](https://github.com/nevir/readable-licenses/blob/master/markdown/GPLv2-LICENSE.md)
  //[Apache](https://github.com/IQAndreas/markdown-licenses/blob/master/apache-v2.0.md)
  if (license === "MIT") {
    return "[MIT](https://www.mit.edu/~amini/LICENSE.md)";
  } else if (license === "Apache") {
    return "[Apache](https://github.com/IQAndreas/markdown-licenses/blob/master/apache-v2.0.md)";
  } else if (license === "GPLv2") {
    return "[GPlv2](https://github.com/nevir/readable-licenses/blob/master/markdown/GPLv2-LICENSE.md)";
  } else {
    return "NONE";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "NONE") {
    return "There is no license for this project.";
  } else {
    return `This project is licensed under ${renderLicenseLink(
      license
    )} Badge: ${renderLicenseBadge(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}
   # Description:
   ${answers.description}
   ## Table of Contents: 
  - [Installation](#Installation:)

  - [Usage](#Usage:)

  - [License](#License:)

  - [Contributing](#Contributing:)

  - [Tests](#Tests:)

  - [Questions](#Questions:)

   ## Installation:
   ${answers.installation}
   ## Usage:
   ${answers.usage}
   ## License:
   ${renderLicenseSection(answers.license)}
   ## Contributing:
   ${answers.contributionGuidelines}
   ## Tests:
   ${answers.testInstructions}
   ## Questions:
   If you have any questions please contact me at: ${answers.email}
   [${answers.githubUsername}](https://github.com/${answers.githubUsername})

   `;
}
// ##### Table of Contents
// [Headers](#headers)
// [Emphasis](#emphasis)
// ...snip...
// <a name="headers"/>
// ## Headers

module.exports = generateMarkdown;
