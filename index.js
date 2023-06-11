// TODO: Include packages needed for this application
const generateMD = require('./utils/generateMarkdown.js')
const fs = require('fs')
const inquirer = require('inquirer')
var readme_data=''


// TODO: Create an array of questions for user input
// const questions = [
    inquirer.prompt([
    {
        type:'input',
        message:"Project Title :",
        name:'title',
    },
    {
        type:'input',
        message:"Project Description :",
        name:'desc',
    },
    {
        type:'input',
        message:"Table of Contents :",
        name:'contents',
    },
    {
        type:'input',
        message:"project Installation :",
        name:'installation',
    },
    {
        type:'input',
        message:"project Usage :",
        name:'usage',
    },
    {
        type:'checkbox',
        message:"Choose your project License :",
        choices:["MIT","Javascript","Eclipse"],
        name:'license'
    },
    {
        type:'input',
        message:"project Contributing :",
        name:'contributing',
    },
    {
        type:'input',
        message:"project Tests :",
        name:'tests'
    },
    {
        type:'input',
        message:"project Questions :",
        name:'questions'
    }
])
.then((response)=>{
        (response)
        ? writeToFile("readme.md",response)
        : console.log("bad")}
        )

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    readme_data = JSON.stringify(data)
    console.log("readme_data = ",readme_data)
    console.log("readme_data.title = ",data.title)
    console.log("readme_data.license = ",data.license)
     readmeFile(data)

    // generateMD.renderLicenseLink(data.license)
    // fs.writeFile(fileName,`${readme_data}`,err=>
    // err?'good':'bad')
}

function readmeFile(data){
    var title = `# ${data.title} ## license ${generateMD.renderLicenseBadge(license)}`
    var desc = `## Description : ${data.desc}`
    var contents =`## Contents : ${data.contents}`
    var installation = `## Contents : ${data.installation}`
    var usage = `## Contents : ${data.usage}`
    var license = `## Contents : ${data.license}`
    var contributing = `## Contents : ${data.contributing}`
    var tests = `## Contents : ${data.tests}`
    var questions = `## Contents : ${data.questions}`

    console.log(`${title} ${desc} ${contents} ${installation} ${usage} ${license} ${contributing} ${tests} ${questions}`)
    return `${title} ${desc} ${contents} ${installation} ${usage} ${license} ${contributing} ${tests} ${questions}`
}

// TODO: Create a function to initialize app
function init() {
    // writeToFile('.readME.txt',res.title)
}

// Function call to initialize app
init();


// npm i questions


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README