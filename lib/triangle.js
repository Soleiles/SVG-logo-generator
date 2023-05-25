const Shape = require('./shape');

// ****** Pulling from parent class ****** //
class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }

    // ****** Renders new shape based on user input ****** //
    render() {
        let logo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
        <text x="127" y="110" font-size="1.5em" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;

        return logo;
    }
}

module.exports = Triangle;