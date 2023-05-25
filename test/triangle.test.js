const Triangle = require('../lib/triangle');

// ****** Tests Triangle Constructor ****** //
describe('Triangle', () => {
    describe('Instantiate', () => {
      it('should be an instance of the Triangle class', () => {
        const triangle = new Triangle('BUB');
        expect(triangle).toBeInstanceOf(Triangle);
      });
    });
  
    describe('Initialize text', () => {
      it('should set the text correctly', () => {
        const text = 'BUB';
        const triangle = new Triangle(text);
        expect(triangle.text).toBe(text);
      });
    });
  
    describe('Capitalize text', () => {
      it('should capitalize text', () => {
        const text = 'bub';
        const triangle = new Triangle(text);
        expect(triangle.text).toBe(text.toUpperCase());
      });
    });
  
    describe('Invalid text input', () => {
      it('should throw an error if text is more than 3 characters', () => {
        const t = () => {
          new Triangle('bubby');
        };
        const expectedErr = 'Text cannot be longer than 3 characters.';
        expect(t).toThrowError(expectedErr);
      });
    });
  
    describe('Initialize textColor', () => {
      it('should set textColor properly', () => {
        const textColor = 'black';
        const triangle = new Triangle('BUB', textColor);
        expect(triangle.textColor).toBe(textColor);
      });
    });
  
    describe('Initialize shape', () => {
      it('should set shape properly', () => {
        const exampleShape = 'Triangle';
        const triangle = new Triangle('BUB', 'black', exampleShape);
        expect(triangle.shape).toBe(exampleShape);
      });
    });
  
    describe('Initialize shapeColor', () => {
      it('should set shapeColor properly', () => {
        const shapeColor = 'yellow';
        const triangle = new Triangle('BUB', 'black', 'Triangle', shapeColor);
        expect(triangle.shapeColor).toBe(shapeColor);
      });
    });
  
    describe('render() method', () => {
      it('should print the SVG', () => {
        const triangle = new Triangle('BUB', 'black', 'Triangle', 'yellow');
        })
    })
})