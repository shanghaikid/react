import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow';
import BorderContainer from './';
import Spliter from '../Splitter';

describe('BorderContainer', () => {
    test('renders with a child', () => {
        const className = 'abcde';
        const liveSplitters = true;
        const persist = true;

        const renderer = new ReactShallowRenderer();
        renderer.render(<BorderContainer className={className} liveSplitters={liveSplitters} persist={persist}><div>test</div></BorderContainer>)
        const result = renderer.getRenderOutput();
        expect(result.props.className).toBe('borderContainer' + ' ' + className);
        expect(result.props.liveSplitters).toBe(liveSplitters);
        expect(result.props.persist).toBe(persist);

        // expect(result.props.children).toBe(testText);
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
