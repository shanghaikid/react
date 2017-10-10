import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from 'components/BaseComponent';

export default class TextInput extends BaseComponent {
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

TextInput.defaultProps = {
    placeholder: '',
    type: 'text',
    disabled: false
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.name
};