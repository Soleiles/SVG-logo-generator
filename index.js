const inquirer = require('inquirer');
const generateSVG = require('./utils/generateLogo');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please input up to 3 characters for your SVG logo.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please input a color for your text. (Using a color keyword or hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for your SVG logo.',
        choices: [
            'Circle',
            'Square',
            'Triangle'
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please input a color for your shape. (Using a color keyword or hexadecimal number)'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(`./examples/${fileName}.svg`, data, (err) =>
        err ? console.error(err) : console.log('Done.')
    );
}

function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile(answers.shape, generateSVG.generateSVG(answers));
    });
}

init();