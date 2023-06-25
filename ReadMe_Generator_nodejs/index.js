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
        message:"Enter your Github username :",
        name:'githubusername'
    },
    {
        type:'input',
        message:"Enter your Github email address :",
        name:'emailaddress'
    },
    {
        type:'input',
        message:"Enter your Github project repo :",
        name:'Gitrepo'
    },
    {
        type:'input',
        message:"Enter your Deployed/Production link :",
        name:'DeployedLink'
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
        message:"Project Video ID :",
        name:'Video'
    },
    {
        type:'input',
        message:"Project Test :",
        name:'Tests'
    },
    {
        type:'checkbox',
        message:"Choose your project License :",
        choices:["MIT","Apache","Mozilla"],
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
    err?'*** Sucessfully generated readme.md file !!!***':'file not generated')
}



function readmeFile(data){
    var title = `# ${data.Title} ${generateMD.license(data.License)} \n`

    var nodebadge = `[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) \n`
    var jsbadge = `[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) \n`
    var inquirerbadge = `[![Inquirer](https://img.shields.io/badge/Inquirer-0d0d0d?style=for-the-badge&logo=inquirer&logoColor=white)](https://www.npmjs.com/package/inquirer)\n`

    var toc = `## Table Of Contents : \n ${generateMD.toc(data.toc)} \n`

    var desc = `## Description :  \n <a name="Description"></a>  \n ${data.Description} \n`

    var tests = `## Tests :  \n <a name="Tests"></a> \n ${data.Tests} \n`
    
    var questions = `## Questions :  \n <a name="Questions"></a> \n 1. What is your Github Username? \n 2. What is your Email address ? \n`

    var answers =`
    | Github Username  | **Email id** | **Github Repo link** | **Deployed Url** |
    | --- | --- | --- | --- |
    | [${data.githubusername}](https://github.com/${data.githubusername}) | ${data.emailaddress} | [${data.Title}](${data.Gitrepo}/) | [${data.Title}](${data.DeployedLink}/) \n`

    var installation = '## Installation :  \n '+'<a name="Installation"></a> \n'+'```shell \n'+data.Installation+'\n'+' ```\n'

    var usage = `## Usage :  \n <a name="Usage"></a> \n ${data.Usage} \n`

    var watchmevideo = `## Watchme Video : \n <a name="Video"></a> \n [![Watch the video](https://img.youtube.com/vi/${data.Video}/maxresdefault.jpg)](https://youtu.be/${data.Video})\n`



    var license = `## License :  \n <a name="License"></a> \n ${generateMD.licenseLink(data.License)} \n`



    var screenshot = `## Screenshot : \n <a name="screenshot"></a> \n ![Watch the video](https://img.youtube.com/vi/${data.Video}/maxresdefault.jpg) \n`

    var tests = `## Tests :\n <a name="Tests"></a> \n ${data.Tests}\n`



    // var copyright = `#### Copyright © 2023, Divya Krishnan. Released under the [MIT License](LICENSE).`

    
    var copyright = `#### Copyright © 2023, Divya Krishnan. Released under the ${generateMD.licenseLink(data.License)}.`


    
    var readme = `${title} ${nodebadge} ${jsbadge} ${inquirerbadge} ${toc} ${desc} ${questions} ${answers} ${installation} ${usage} ${watchmevideo} ${license} ${tests} ${screenshot} ${copyright}`

    return readme
}

