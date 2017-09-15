import App from './app';

describe('app', () => {
    it('app should be an object', () => {
        console.assert(typeof App === 'object');
    });

    it('app should have an init function', () => {
        console.assert(App.init() === 'app start');
    });

    it('render should change node innerHTML', () => {
        let node = {},
            testString = 'test';
        App.render(node, testString);
        console.assert(node.innerHTML === testString);
    });
});
