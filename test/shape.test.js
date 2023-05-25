const Shape = require('../lib/shape');

describe('Shape', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Shape class', () => {
            const shape = new Shape('BUB');
            expect(shape).toBeInstanceOf(Shape);
        })
    })
    describe('Initialize text', () => {
        it('should set the text correctly', () => {
            const text = 'BUB';
            const shape = new Shape(text);
            expect(shape.text).toBe(text);
        })
    })
    describe('Capitalize text', () => {
        it('should capitalize text', () => {
            const text = 'bub';
            const shape = new Shape(text);
            expect(shape.text).toBe(text.toUpperCase());
        })
    })
    describe('Invalid text input', () => {
        it('should throw an error if text is more than 3 characters', () => {
            const t = () => {
                new Shape('bubby');
            };
            const expectedErr = 'Text cannot be longer than 3 characters.'
            expect(t).toThrow(Error);
            expect(t).toThrow(expectedErr);
        })
    })
    describe('Initialize textColor', () => {
        it('should set textColor properly', () => {
            const textColor = 'black';
            const circle = new Circle('BUB', textColor);
            expect(circle.textColor).toBe(textColor);
        })
    })
    describe('Initialize shape', () => {
        it('should set shape properly', () => {
            const exampleShape = 'Circle';
            const circle = new Circle(
                'BUB', 
                'black', 
                exampleShape
            );
            expect(circle.shape).toBe(exampleShape);
        })
    })
    describe('Initialize shapeColor', () => {
        it('should set text properly', () => {
            const shapeColor = "yellow";
            const circle = new Circle(
                'BUB', 
                'black', 
                'Circle', 
                shapeColor
            );
            expect(circle.shapeColor).toBe(shapeColor);
        })
    })
    describe('render() method', () => {
        it('should print SVG code with data', () => {
            const circle = new Circle(
                'BEE', 
                'black', 
                'Circle', 
                'yellow'
            );
            const logo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <circle cx="150" cy="100" r="80" fill="yellow" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">BEE</text>
        </svg>`;

            expect(circle.render()).toBe(logo);
        })
    })
})