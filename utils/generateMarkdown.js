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
        3.  [Contents](#Contents) \n
        4.  [Installation](#Installation) \n
        5.  [Usage](#Usage) \n
        6.  [Tests](#Tests) \n
        7.  [Questions](#Questions) \n
        8.  [License](#License) \n
        9.  [Video](#Video) \n`
  return `${link}`
}


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
