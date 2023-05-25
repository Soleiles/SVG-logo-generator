class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text.toUpperCase();
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;

        if (text.length > 3) {
            throw new Error('Text cannot be longer than 3 characters.');
        };
    }
    render() {
        let logo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;

        return logo;
    }
}

module.exports = Shape;