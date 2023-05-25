const Circle = require('../lib/circle');
const Square = require('../lib/square');
const Triangle = require('../lib/triangle');

function generateSVG(data) {
    const {text, textColor, shape, shapeColor} = data;

    if (shape === 'Circle') {
        const circle = new Circle(text, textColor, shape, shapeColor);
        return circle.render(); 
    }
    else if (shape === 'Square') {
        const square = new Square(text, textColor, shape, shapeColor);
        return square.render(); 
    }
    else {
        const triangle = new Triangle(text, textColor, shape, shapeColor);
        return triangle.render(); 
    }
};

module.exports = {
    generateSVG
};