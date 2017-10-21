import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';
import { validatable , withTooltip } from '../../Helper';
import { getClsName } from '../../../utils';

export class TextInputView extends BaseComponent {
    init() {
        this.baseClassName = `textInput`;
    }

    render() {
        const { placeholder, type, disabled, name, mod, inputValue, autocomplete} = this.props,
            cls = getClsName(this.className, mod)

        return (
            <input ref={input => this.domNode = input}
                className={cls}
                placeholder={placeholder}
                disabled={disabled}
                name={name}
                type={type}
                value={inputValue}
                autocomplete={autocomplete}
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
    inputValue: '',
    autocomplete: 'on'
};

TextInputView.propTypes = {
    mod: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.name,
    onChange: PropTypes.func,
    autocomplete: PropTypes.string
};

const TextInput = validatable(withTooltip(TextInputView));
export default TextInput;