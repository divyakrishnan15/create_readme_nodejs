// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicense(license) {
  var yourLicense;
  // console.log(license);

  for (let l in license) {
    console.log(license[l]);
    switch (license[l]) {
      case "MIT": {
        yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
        break;
      }
      case "Apache": {
        yourLicense = `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
        break;
      }
      case "Mozilla": {
        yourLicense = `![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-orange.svg)`;
        break;
      }
    }
  }
  console.log(yourLicense)
  return yourLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // console.log(' renderLicenseLink = ',license)
  // console.log(' renderLicenseLink = ',String(license))
  var licenseName;
  var licenseurl;

  var licenseNew = String(license)

  switch (licenseNew) {
    case "MIT":
      licenseName = "MIT License";
      licenseurl = "https://choosealicense.com/licenses/mit/";
      break;
    case "Mozilla":
      licenseName = "Mozilla Public License 2.0";
      licenseurl = "https://choosealicense.com/licenses/mpl-2.0/";
      break;
    case "Apache":
      licenseName = "Apache License 2.0";
      licenseurl = "https://choosealicense.com/licenses/apache-2.0/";
      break;
    default:
      licenseName = "No License selected";
      licenseurl = "";
      break;
}
// console.log('licenseName ', licenseName)
// console.log('licenseurl = ',licenseurl)
// console.log(`END FUNC = [${licenseName}](${licenseurl})`)
return `[${licenseName}](${licenseurl})`;
}


// function renderLicenseSection(license) {
//   let licenseSection = "";
//   if (license != "NONE") {
//     licenseSection += "## License\n";
//     licenseSection += renderLicenseLink(license)
    
//   }
//   return licenseSection;
// }


// TODO: Create a function to generate markdown for README





function renderLink() {
  let link = 
  // `## Table of Contents
      `1.  [Documentation](#documentation) \n
        1.  [Title](#Title) \n
        2.  [Description](#Description) \n
        3.  [Questions](#Questions) \n
        4.  [Installation](#Installation) \n
        5.  [Usage](#Usage) \n
        6.  [Video](#Video) \n
        7.  [License](#License) \n
        8. [Tests](#Tests) \n
        9. [Screenshot](#screenshot) \n`
  return `${link}`
}


module.exports = {
  license: function (license) {
    return renderLicense(license);
  },
  licenseLink: function (license) {
    return renderLicenseLink(license) //s:["MIT","Apache","Mozilla"
  },
  toc: function (toc) {
    return renderLink(toc)
  }
};
