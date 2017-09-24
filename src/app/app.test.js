import App from './app';

describe('app', () => {
    test('app should be an object', () => {
        console.assert(typeof App === 'object');
    });

    test('app should have an init function', () => {
        console.assert(App.init() === 'app start');
    });

    test('render should change node innerHTML', () => {
        let node = {},
            testString = 'test';
        App.render(node, testString);
        console.assert(node.innerHTML === testString);
    });
});
