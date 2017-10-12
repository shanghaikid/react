import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';
import { validatable } from '../../Helper';
import { getClsName } from '../../../utils';

export class TextInputView extends BaseComponent {
    init() {
        this.baseClassName = `textInput`;
    }

    // return object 
    // pass result into the setState
    getTargetValue(target) {
        return {
            value: target.value
        };
    }

    render() {
        const { placeholder, type, disabled, name, mod, message, inputValue} = this.props,
            cls = getClsName(this.className, mod);
        console.log(this.props);
        return (
            <input ref={input => this.domNode = input}
                className={cls}
                placeholder={placeholder}
                disabled={disabled}
                name={name}
                type={type}
                title={message}
                value={inputValue}
                onChange={this.handleEvent}
                onFocus={this.handleEvent}
                onBlur={this.handleEvent}
                />
        );
    }
}

TextInputView.defaultProps = {
    placeholder: '',
    type: 'text',
    disabled: false,
    inputValue: ''
};

TextInputView.propTypes = {
    mod: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.name,
    onChange: PropTypes.func
};

const TextInput = validatable(TextInputView);
export default TextInput;