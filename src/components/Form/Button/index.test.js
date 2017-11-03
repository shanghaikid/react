import React from 'react';
import Button from '.';
import {shallow} from 'enzyme';

test('Button', () => {
    const props = {
        text: 'Button',
        type: 'button',
        title: 'abcde',
        disabled: false
    };
    const component = shallow(
        <Button {...props} />
    );

    expect(Button.text()).toEqual('Button');
});