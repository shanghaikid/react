import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from './Header';

describe('Header', () => {
    test('renders with text', () => {
        const testText = 'it is test text';
        const renderer = new ReactShallowRenderer();
        renderer.render(<Header text={testText} />)
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('h1');
        expect(result.props.children).toBe(testText);
        
    });
});

// const ReactTestRenderer = require('react-test-renderer');

// const renderer = ReactTestRenderer.create(
//  <Link page="https://www.facebook.com/">Facebook</Link>
// );

// console.log(renderer.toJSON());
// // { type: 'a',
// //   props: { href: 'https://www.facebook.com/' },
// //   children: [ 'Facebook' ] }
