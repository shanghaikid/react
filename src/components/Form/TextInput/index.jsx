import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';
import { validatable } from '../../Helper';

export class TextInputView extends BaseComponent {
    init() {
        this.baseClassName = `textInput`;
    }

   onClick(e) {
        const {onClicked} = this.props;

        if (onClicked) {
            onClicked(e, this);
        }
    }

    render() {
        const { placeholder, type, disabled, name} = this.props;

        return (
            <input ref={input => this.domNode = input}
                className={this.className}
                placeholder={placeholder}
                disabled={disabled}
                name={name}
                type={type} />
        );
    }
}

TextInputView.defaultProps = {
    placeholder: '',
    type: 'text',
    disabled: false
};

TextInputView.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.name
};

const TextInput = validatable(TextInputView);
export default TextInput;