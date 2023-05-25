const Square = require('../lib/square');

// ****** Tests Square Constructor ****** //
describe('Square', () => {
    describe('Instantiate', () => {
      it('should be an instance of the Square class', () => {
        const square = new Square('BUB');
        expect(square).toBeInstanceOf(Square);
      });
    });
  
    describe('Initialize text', () => {
      it('should set the text correctly', () => {
        const text = 'BUB';
        const square = new Square(text);
        expect(square.text).toBe(text);
      });
    });
  
    describe('Capitalize text', () => {
      it('should capitalize text', () => {
        const text = 'bub';
        const square = new Square(text);
        expect(square.text).toBe(text.toUpperCase());
      });
    });
  
    describe('Invalid text input', () => {
      it('should throw an error if text is more than 3 characters', () => {
        const t = () => {
          new Square('bubby');
        };
        const expectedErr = 'Text cannot be longer than 3 characters.';
        expect(t).toThrowError(expectedErr);
      });
    });
  
    describe('Initialize textColor', () => {
      it('should set textColor properly', () => {
        const textColor = 'black';
        const square = new Square('BUB', textColor);
        expect(square.textColor).toBe(textColor);
      });
    });
  
    describe('Initialize shape', () => {
      it('should set shape properly', () => {
        const exampleShape = 'Square';
        const square = new Square('BUB', 'black', exampleShape);
        expect(square.shape).toBe(exampleShape);
      });
    });
  
    describe('Initialize shapeColor', () => {
      it('should set shapeColor properly', () => {
        const shapeColor = 'yellow';
        const square = new Square('BUB', 'black', 'Square', shapeColor);
        expect(square.shapeColor).toBe(shapeColor);
      });
    });
  
    describe('render() method', () => {
      it('should print the SVG', () => {
        const square = new Square('BUB', 'black', 'Square', 'yellow');
        })
    })
})