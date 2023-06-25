// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicense(license) {
  let yourLicense = "";
  console.log(license);
  for (let l in license) {
    console.log(license[l]);
    switch (license[l]) {
      case "MIT": {
        yourLicense += `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
        console.log("GOOD");
        break;
      }
      case "Javascript": {
        yourLicense += `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
        break;
      }
      case "Eclipse": {
        yourLicense += `[![License: Eclipse](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
        break;
      }
    }
  }
  return `${yourLicense}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function renderProgress(license) {
  let progress = "";
  console.log(license);
  // for (let l in license) {
  console.log(license[0]);
  switch (license[0]) {
    case "Done": {
      progress = `DONE`;
      break;
    }
    case "In Progress": {
      progress = `In Progress`;
      break;
    }
  }
  
  return `${progress}`;
}




function renderLink() {
  let link = 
  // `## Table of Contents
      `1.  [Documentation](#documentation) \n
        1.  [Title](#Title) \n
        2.  [Description](#Description) \n
        3.  [UserStory](#UserStory) \n
        4.  [AcceptanceCriteria](#AcceptanceCriteria) \n
        5.  [Questions](#Questions) \n
        6.  [Installation](#Installation) \n
        7.  [Usage](#Usage) \n
        8.  [Video](#Video) \n
        9.  [License](#License) \n
        10. [Screenshot](#Screenshot) \n
        11.  [Tests](#Tests) \n`
  return `${link}`
}
// var readme = `${title} ${nodebadge} ${jsbadge} ${inquirerbadge} ${toc} ${desc} ${userstory} ${acceptcriteria} ${questions} ${answers} ${installation} ${usage} ${watchmevideo} ${license} ${screenshot} ${tests} ${copyright}`
   // Title Description UserStory AcceptanceCriteria githubusername emailaddress Gitrepo Installation Usage Video Screenshot


module.exports = {
  license: function (license) {
    return renderLicense(license);
  },
  progress: function (progress) {
    return renderProgress(progress)
  },
  toc: function (toc) {
    return renderLink(toc)
  }
};