import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from '../../BaseComponent';
import { validatable } from '../../Helper';
import { getClsName } from '../../../utils';

export class TextInputView extends BaseComponent {
    init() {
        this.baseClassName = `textInput`;
    }

    render() {
        const { placeholder, type, disabled, name, mod, message, inputValue} = this.props,
            cls = getClsName(this.className, mod),
            tooltip = {
                ['data-tooltip']: message,
                ['data-tooltip-show']: message === '' ? 'no' : 'yes'
            };

        // make sure the outter is a block container
        // so that we can use ::after or ::before
        return (
            <div className={cls} {...tooltip} >
                <input data-tooltip="test" ref={input => this.domNode = input}
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
            </div>
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