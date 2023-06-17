// TODO: Include packages needed for this application

const generateMD = require('./utils/generateMarkdown.js')
const fs = require('fs')
const inquirer = require('inquirer')
var readme_data=''


// TODO: Create an array of questions for user input
    inquirer.prompt([
    {
        type:'input',
        message:"Project Title :",
        name:'Title',
    },
    {
        type:'input',
        message:"Project Description :",
        name:'Description',
    },
    {
        type:'input',
        message:"Project of Contents :",
        name:'Contents',
    },
    {
        type:'input',
        message:"Project Installation :",
        name:'Installation',
    },
    {
        type:'input',
        message:"Project Usage :",
        name:'Usage',
    },
    {
        type:'input',
        message:"Project Tests :",
        name:'Tests'
    },
    {
        type:'input',
        message:"Enter your Github username :",
        name:'githubusername'
    },
    {
        type:'input',
        message:"Enter your Github email address :",
        name:'emailaddress'
    },
    {
        type:'checkbox',
        message:"Choose your project License :",
        choices:["MIT","Javascript","Eclipse"],
        name:'License'
    },
])
.then((response)=>{
        (response)
        ? writeToFile("readme.md",response)
        : console.log("bad")}
        )

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    readme_data = JSON.stringify(data)

    fs.writeFile(fileName,readmeFile(data),err=>
    err?'good':'bad')
}



function readmeFile(data){
    var title = `# ${data.Title} ${generateMD.license(data.License)} \n`
    var toc = `## Table Of Contents : \n ${generateMD.toc(data.toc)} \n`
    var document = `## Documentation \n <a name="Documentation"></a>`
    var desc = `## Description :  \n <a name="Description"></a>  \n ${data.Description} \n`
    var contents =`## Contents :  \n <a name="Contents"></a> \n ${data.Contents} \n `
    var installation = '## Installation :  \n '+'<a name="Installation"></a> \n'+'```shell \n'+data.Installation+'\n'+' ```\n'
    var usage = `## Usage :  \n <a name="Usage"></a> \n ${data.Usage} \n`
    var tests = `## Tests :  \n <a name="Tests"></a> \n ${data.Tests} \n`
    var questions = `## Questions :  \n <a name="Questions"></a> \n 1. What is your Github Username? \n 2. What is your Email address ? \n`
    var answers = '## Answers :  \n <a name="Answers"></a> \n 1.Github Username = '+data.githubusername+'\n'+'2.Email address = '+data.emailaddress+'\n'
    var license = `## License :  \n <a name="License"></a> \n ${generateMD.license(data.License)} \n`
    

    var readme = `${title} ${toc} ${desc} ${contents} ${installation} ${usage} ${tests} ${questions} ${answers} ${license} `
    console.log(`${title} ${toc} ${desc} ${contents} ${installation} ${usage} ${tests} ${questions} ${answers} ${license} `)

    return readme
}




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